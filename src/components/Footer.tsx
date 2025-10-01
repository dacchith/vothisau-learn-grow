import { Mail, MapPin, Phone, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">TH Võ Thị Sáu</h3>
                <p className="text-xs text-muted-foreground">Đắk Mil - Lâm Đồng</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Nơi chắp cánh ước mơ tuổi thơ
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Liên kết nhanh</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link to="/news" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Tin tức - Sự kiện
              </Link>
              <Link to="/announcements" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Thông báo
              </Link>
              <Link to="/gallery" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Thư viện ảnh
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Thôn 5, xã Đắk Mil, tỉnh Lâm Đồng
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  (Cập nhật)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:dacchith@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  dacchith@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Trường Tiểu học Võ Thị Sáu. Mọi ngày đến trường là một ngày vui.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
