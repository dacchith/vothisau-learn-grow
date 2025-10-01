import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import schoolBuilding from "@/assets/school-building.jpg";
import activitiesImage from "@/assets/activities.jpg";
import teachersImage from "@/assets/teachers.jpg";
import heroImage from "@/assets/hero-school.jpg";

const Gallery = () => {
  const schoolPhotos = [
    { id: 1, src: schoolBuilding, title: "Khuôn viên trường", description: "Cổng trường và sân chơi rộng rãi" },
    { id: 2, src: heroImage, title: "Lớp học", description: "Phòng học hiện đại, thoáng mát" },
  ];

  const activityPhotos = [
    { id: 1, src: activitiesImage, title: "Hoạt động ngoại khóa", description: "Các em tham gia trồng cây" },
    { id: 2, src: heroImage, title: "Văn nghệ", description: "Biểu diễn văn nghệ ngày 20/11" },
  ];

  const teacherPhotos = [
    { id: 1, src: teachersImage, title: "Đội ngũ giáo viên", description: "Thầy cô nhiệt tình, tâm huyết" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/20 to-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thư viện ảnh & Video
          </h1>
          <p className="text-xl text-muted-foreground">
            Khoảnh khắc đẹp tại Trường Tiểu học Võ Thị Sáu
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="school" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="school">Sân trường</TabsTrigger>
            <TabsTrigger value="activities">Hoạt động</TabsTrigger>
            <TabsTrigger value="teachers">Giáo viên</TabsTrigger>
          </TabsList>

          <TabsContent value="school">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-foreground mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-foreground mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teachers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacherPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-foreground mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Video giới thiệu</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Video phóng sự về trường sẽ được cập nhật sớm
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
