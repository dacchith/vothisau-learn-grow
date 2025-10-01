import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Trophy, Heart } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Lễ Khai giảng năm học 2025-2026",
      date: "05/09/2025",
      category: "Sự kiện nổi bật",
      icon: Trophy,
      content: "Ngày 5/9 vừa qua, Trường Tiểu học Võ Thị Sáu đã long trọng tổ chức Lễ Khai giảng năm học mới 2025-2026 trong không khí vui tươi, rộn ràng. Các em học sinh được tham gia nhiều tiết mục văn nghệ đặc sắc, đón nhận cờ hoa từ phụ huynh và thầy cô. Năm học mới hứa hẹn nhiều hoạt động bổ ích và thú vị.",
      color: "primary"
    },
    {
      id: 2,
      title: "Đổi mới phương pháp giảng dạy Toán học",
      date: "15/08/2025",
      category: "Hoạt động dạy & học",
      icon: BookOpen,
      content: "Nhà trường đã tổ chức buổi tập huấn phương pháp giảng dạy Toán học theo hướng tích cực, phát huy tính chủ động, sáng tạo của học sinh. Các thầy cô đã được chia sẻ nhiều kinh nghiệm hay, cách dạy mới giúp học sinh yêu thích môn Toán hơn. Phương pháp này sẽ được áp dụng rộng rãi trong năm học mới.",
      color: "accent"
    },
    {
      id: 3,
      title: "Cuộc thi viết chữ đẹp cấp trường",
      date: "10/07/2025",
      category: "Phong trào thi đua",
      icon: Trophy,
      content: "Cuộc thi viết chữ đẹp cấp trường đã diễn ra sôi nổi với sự tham gia nhiệt tình của các em học sinh từ lớp 1 đến lớp 5. Ban giám khảo đã trao 3 giải Nhất, 5 giải Nhì và 8 giải Ba cho các em có nét chữ đẹp, bố cục hợp lý. Đây là dịp để các em rèn luyện kỹ năng viết và thể hiện năng khiếu của mình.",
      color: "secondary"
    },
    {
      id: 4,
      title: "Ngày hội Thiếu nhi 1/6 vui tươi",
      date: "01/06/2025",
      category: "Sự kiện nổi bật",
      icon: Heart,
      content: "Nhân dịp Quốc tế Thiếu nhi 1/6, nhà trường đã tổ chức nhiều hoạt động vui chơi, giải trí cho các em: ca nhạc, múa, trò chơi dân gian, tô tượng, vẽ tranh. Các em đã có một ngày vui chơi thật ý nghĩa, được nhận quà và lời chúc từ các thầy cô. Không khí tràn ngập tiếng cười, sự phấn khởi của các em.",
      color: "primary"
    },
    {
      id: 5,
      title: "Hoạt động trồng cây xanh bảo vệ môi trường",
      date: "20/05/2025",
      category: "Hoạt động ngoại khóa",
      icon: Heart,
      content: "Các em học sinh lớp 4 và 5 đã tham gia hoạt động trồng cây xanh trong khuôn viên trường và xung quanh địa phương. Hoạt động này không chỉ giúp cải thiện môi trường mà còn giáo dục ý thức bảo vệ thiên nhiên cho các em. Mỗi em đều tự hào khi được trồng và chăm sóc cây xanh của mình.",
      color: "accent"
    },
    {
      id: 6,
      title: "Hội khỏe Phù Đổng cấp trường",
      date: "15/04/2025",
      category: "Phong trào thi đua",
      icon: Trophy,
      content: "Hội khỏe Phù Đổng cấp trường đã diễn ra với nhiều môn thể thao: chạy 60m, nhảy xa, nhảy cao, ném bóng. Các em đã thi đấu hết mình, thể hiện tinh thần thể thao cao cả. Nhiều em đã đạt thành tích xuất sắc và được chọn tham dự hội khỏe cấp huyện. Đây là cơ hội tốt để các em rèn luyện sức khỏe và ý chí.",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tin tức - Sự kiện
          </h1>
          <p className="text-xl text-muted-foreground">
            Cập nhật các hoạt động và thông tin mới nhất của nhà trường
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${item.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {item.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default News;
