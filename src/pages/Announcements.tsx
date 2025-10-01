import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Users, Megaphone, DollarSign } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Thông báo họp phụ huynh học kỳ I năm học 2025-2026",
      date: "20/10/2025",
      type: "Họp phụ huynh",
      icon: Users,
      priority: "high",
      content: "Nhà trường trân trọng thông báo: Sẽ tổ chức họp phụ huynh học sinh vào ngày 25/10/2025 (Thứ Bảy) lúc 8h00 sáng tại hội trường nhà trường. Nội dung họp: tổng kết tháng đầu năm học, phương hướng hoạt động học kỳ I, trao đổi về phương pháp giáo dục học sinh. Kính mong quý phụ huynh sắp xếp thời gian tham dự đầy đủ."
    },
    {
      id: 2,
      title: "Kế hoạch tuyển sinh lớp 1 năm học 2026-2027",
      date: "15/05/2026",
      type: "Tuyển sinh",
      icon: Bell,
      priority: "high",
      content: "Trường Tiểu học Võ Thị Sáu thông báo kế hoạch tuyển sinh lớp 1 năm học 2026-2027. Đối tượng: Trẻ em 6 tuổi (sinh năm 2020). Thời gian nhận hồ sơ: từ 01/06/2026 đến 30/06/2026. Hồ sơ cần nộp: giấy khai sinh, sổ hộ khẩu, giấy chứng nhận tiêm chủng. Liên hệ: văn phòng nhà trường hoặc email dacchith@gmail.com để được tư vấn chi tiết."
    },
    {
      id: 3,
      title: "Lịch nghỉ Tết Nguyên đán Ất Tỵ 2025",
      date: "20/01/2025",
      type: "Lịch nghỉ",
      icon: Calendar,
      priority: "medium",
      content: "Căn cứ vào công văn của Sở Giáo dục và Đào tạo, học sinh Trường Tiểu học Võ Thị Sáu sẽ được nghỉ Tết Nguyên đán từ ngày 25/01/2025 (29 Tết) đến hết ngày 02/02/2025 (mùng 8 Tết). Học sinh trở lại học bình thường vào ngày 03/02/2025 (thứ Hai, mùng 9 Tết). Chúc các em và phụ huynh một mùa Xuân an khang, hạnh phúc."
    },
    {
      id: 4,
      title: "Thông báo về các khoản thu năm học 2025-2026",
      date: "01/09/2025",
      type: "Thu chi",
      icon: DollarSign,
      priority: "high",
      content: "Nhà trường thông báo các khoản thu theo quy định của Sở Giáo dục: học phí (miễn), quỹ lớp (tự nguyện), bảo hiểm y tế học sinh (theo quy định). Mọi khoản thu đều được công khai, minh bạch và có phiếu thu hợp lệ. Quý phụ huynh có thắc mắc xin liên hệ với giáo viên chủ nhiệm hoặc phòng Tài chính - Kế toán."
    },
    {
      id: 5,
      title: "Lịch nghỉ Lễ Quốc khánh 2/9",
      date: "25/08/2025",
      type: "Lịch nghỉ",
      icon: Megaphone,
      priority: "medium",
      content: "Theo lịch nghỉ lễ của nhà nước, học sinh sẽ được nghỉ Lễ Quốc khánh 2/9 từ ngày 01/09/2025 đến hết ngày 03/09/2025 (Chủ nhật - Thứ Ba). Học sinh trở lại học bình thường vào ngày 04/09/2025 (Thứ Tư). Chúc các em và gia đình một kỳ nghỉ lễ vui vẻ, ý nghĩa."
    },
    {
      id: 6,
      title: "Thông báo về giờ giấc ra vào trường",
      date: "10/08/2025",
      type: "Quy định",
      icon: Bell,
      priority: "medium",
      content: "Để đảm bảo an toàn và trật tự, nhà trường quy định: học sinh đến trường trước 7h15, tan học lúc 11h00 (buổi sáng) và 16h30 (buổi chiều). Phụ huynh đưa đón con đúng giờ, không ùn tắc tại cổng trường. Học sinh chỉ được vào trường khi có giáo viên trực đón. Mong quý phụ huynh phối hợp để bảo đảm an toàn cho các em."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thông báo
          </h1>
          <p className="text-xl text-muted-foreground">
            Các thông báo quan trọng từ nhà trường
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {announcements.map((announcement) => {
            const Icon = announcement.icon;
            return (
              <Card key={announcement.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{announcement.title}</CardTitle>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{announcement.date}</span>
                          </div>
                          <Badge variant={announcement.priority === "high" ? "default" : "secondary"}>
                            {announcement.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {announcement.content}
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

export default Announcements;
