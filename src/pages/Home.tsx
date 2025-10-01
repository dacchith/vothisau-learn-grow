import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, BookOpen, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Trường Tiểu học Võ Thị Sáu
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Nơi chắp cánh ước mơ tuổi thơ
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            "Mỗi ngày đến trường là một ngày vui"
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about">
              <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all">
                Tìm hiểu thêm
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
                Liên hệ ngay
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Chào mừng đến với TH Võ Thị Sáu
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trường Tiểu học Võ Thị Sáu tọa lạc tại Thôn 5, xã Đắk Mil, tỉnh Lâm Đồng. 
            Với truyền thống hiếu học và tinh thần đoàn kết, nhà trường luôn nỗ lực xây dựng 
            môi trường học tập thân thiện, an toàn và sáng tạo, giúp học sinh phát triển toàn diện 
            cả về tri thức, kỹ năng và nhân cách.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Môi trường thân thiện</h3>
              <p className="text-muted-foreground">
                Không gian học tập an toàn, ấm áp, nơi mỗi em đều được yêu thương và quan tâm.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Đội ngũ tận tâm</h3>
              <p className="text-muted-foreground">
                Giáo viên giàu kinh nghiệm, tâm huyết, luôn đặt lợi ích học sinh lên hàng đầu.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Chương trình đa dạng</h3>
              <p className="text-muted-foreground">
                Kết hợp học tập và vui chơi, phát triển cả kiến thức lẫn kỹ năng sống.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Thành tích xuất sắc</h3>
              <p className="text-muted-foreground">
                Nhiều giải thưởng trong các cuộc thi học sinh giỏi cấp huyện, tỉnh.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Hoạt động phong phú</h3>
              <p className="text-muted-foreground">
                Ngoại khóa đa dạng: văn nghệ, thể thao, trồng cây, bảo vệ môi trường.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Phát triển toàn diện</h3>
              <p className="text-muted-foreground">
                Giáo dục đạo đức, kỹ năng và tri thức, giúp học sinh tự tin vững bước.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Sẵn sàng tham gia cùng chúng tôi?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hãy liên hệ với chúng tôi để tìm hiểu thêm về tuyển sinh và các hoạt động của trường.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
