import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import teachersImage from "@/assets/teachers.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${schoolBuilding})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-accent/75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Giới thiệu về trường
          </h1>
          <p className="text-xl md:text-2xl">
            Lịch sử, Tầm nhìn và Sứ mệnh
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Lịch sử thành lập
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Trường Tiểu học Võ Thị Sáu được thành lập với sứ mệnh phục vụ nhu cầu học tập 
                của con em trên địa bàn xã Đắk Mil và các khu vực lân cận. Trải qua nhiều năm 
                xây dựng và phát triển, trường đã trở thành điểm sáng về chất lượng giáo dục 
                tiểu học tại địa phương, với đội ngũ giáo viên tận tâm và cơ sở vật chất ngày 
                càng được cải thiện, tạo điều kiện tốt nhất cho học sinh phát triển.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Tầm nhìn</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Trở thành ngôi trường thân thiện, tiên tiến, nơi mỗi học sinh đều được phát huy 
                  tối đa năng lực và nuôi dưỡng ước mơ. Chúng tôi hướng tới việc xây dựng một môi 
                  trường giáo dục hiện đại, nơi học sinh không chỉ học kiến thức mà còn phát triển 
                  kỹ năng sống và nhân cách.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Sứ mệnh</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mang đến nền giáo dục tiểu học chất lượng, toàn diện, kết hợp dạy chữ – dạy người 
                  – dạy kỹ năng, để học sinh trở thành những công dân nhỏ tự tin, sáng tạo và yêu 
                  thương cộng đồng. Chúng tôi cam kết đồng hành cùng gia đình trong việc giáo dục 
                  thế hệ tương lai.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Đội ngũ giáo viên</h2>
              </div>
              
              <div className="mb-6">
                <img 
                  src={teachersImage} 
                  alt="Đội ngũ giáo viên" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Đội ngũ cán bộ, giáo viên của Trường Tiểu học Võ Thị Sáu gồm những thầy cô giàu 
                kinh nghiệm, tâm huyết với nghề, luôn hết lòng vì học sinh thân yêu. Các thầy cô 
                không chỉ có chuyên môn vững vàng mà còn có tình yêu thương dành cho trẻ em.
              </p>

              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Cam kết của đội ngũ:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Thường xuyên tham gia bồi dưỡng chuyên môn để nâng cao chất lượng giảng dạy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Áp dụng phương pháp giảng dạy hiện đại, tích cực, lấy học sinh làm trung tâm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Quan tâm đến từng em học sinh, phát hiện và phát huy điểm mạnh của mỗi em</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Phối hợp chặt chẽ với phụ huynh trong việc giáo dục và chăm sóc học sinh</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
