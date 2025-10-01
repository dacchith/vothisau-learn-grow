import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2, Save } from "lucide-react";

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "news",
    type: ""
  });

  useEffect(() => {
    checkAuth();
    if (id && id !== "new") {
      fetchPost();
    }
  }, [id]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roles) {
      navigate("/");
    }
  };

  const fetchPost = async () => {
    if (!id || id === "new") return;

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Không thể tải bài viết"
      });
      navigate("/admin");
    } else {
      setFormData({
        title: data.title,
        content: data.content,
        category: data.category,
        type: data.type || ""
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }

    const postData = {
      title: formData.title,
      content: formData.content,
      category: formData.category,
      type: formData.type || null,
      author_id: session.user.id
    };

    let error;
    if (id === "new") {
      const result = await supabase.from("posts").insert([postData]);
      error = result.error;
    } else {
      const result = await supabase.from("posts").update(postData).eq("id", id);
      error = result.error;
    }

    setLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: id === "new" ? "Không thể tạo bài viết" : "Không thể cập nhật bài viết"
      });
    } else {
      toast({
        title: "Thành công",
        description: id === "new" ? "Bài viết đã được tạo" : "Bài viết đã được cập nhật"
      });
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/admin")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại
        </Button>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>
              {id === "new" ? "Tạo bài viết mới" : "Chỉnh sửa bài viết"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Tiêu đề *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="Nhập tiêu đề bài viết"
                />
              </div>

              <div>
                <Label htmlFor="category">Danh mục *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="news">Tin tức</SelectItem>
                    <SelectItem value="announcement">Thông báo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Loại (tùy chọn)</Label>
                <Input
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  placeholder="VD: Sự kiện nổi bật, Họp phụ huynh..."
                />
              </div>

              <div>
                <Label htmlFor="content">Nội dung *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={12}
                  placeholder="Nhập nội dung bài viết"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Save className="w-4 h-4 mr-2" />
                  {id === "new" ? "Tạo bài viết" : "Cập nhật"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin")}
                >
                  Hủy
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPostEditor;
