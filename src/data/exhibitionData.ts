import heroGalleryImg from '../assets/images/hero_exhibition_hall_1794579402335.jpg';
import hueImperialImg from '../assets/images/artifact_hue_imperial_1794579402685.jpg';
import hanoiUrbanImg from '../assets/images/artifact_hanoi_urban_1794579403289.jpg';
import lacquerIndochineImg from '../assets/images/artifact_lacquer_indochine_1794579403804.jpg';
import tropicalModernismImg from '../assets/images/artifact_tropical_modernism_1794579405019.jpg';
import contemporaryBambooImg from '../assets/images/artifact_contemporary_bamboo_1794579404436.jpg';

export type EraId = 'era-1' | 'era-2' | 'era-3' | 'era-4' | 'era-5';

export type Discipline =
  | 'Tất cả'
  | 'Kiến trúc'
  | 'Hội họa & Sơn mài'
  | 'Điêu khắc & Gốm'
  | 'Tư liệu đô thị';

export type ArchivalPlateType =
  | 'truss-hue'
  | 'facade-hanoi'
  | 'lacquer-grid'
  | 'brise-soleil'
  | 'bamboo-vault';

export interface ExhibitionChapter {
  id: EraId;
  indexLabel: string;
  period: string;
  shortPeriod: string;
  title: string;
  subtitle: string;
  galleryRoom: string;
  thesis: string;
}

export interface ArtifactItem {
  id: string;
  accessionNumber: string;
  eraId: EraId;
  year: number;
  yearDisplay: string;
  title: string;
  maker: string;
  discipline: Exclude<Discipline, 'Tất cả'>;
  galleryRoom: string;
  medium: string;
  dimensions: string;
  origin: string;
  provenance: string[];
  summary: string;
  curatorialEssay: string[];
  marginNote: {
    reference: string;
    text: string;
  };
  figureCaption: string;
  imageUrl?: string;
  plateType?: ArchivalPlateType;
  plateCode?: string;
}

export const HERO_MEDIA = {
  imageUrl: heroGalleryImg,
  alt: 'Không gian nhà trưng bày trung tâm với ánh sáng tự nhiên chiếu xuống bục trưng bày mô hình kiến trúc gỗ và bình phong sơn mài',
  caption: 'Hình 0 — Toàn cảnh Phòng Trưng Bày Trung Tâm, chuyên đề Dòng Chảy Di Sản (1802–2026).',
};

export const DISCIPLINES: Discipline[] = [
  'Tất cả',
  'Kiến trúc',
  'Hội họa & Sơn mài',
  'Điêu khắc & Gốm',
  'Tư liệu đô thị',
];

export const EXHIBITION_CHAPTERS: ExhibitionChapter[] = [
  {
    id: 'era-1',
    indexLabel: 'Phần 01',
    period: '1802 – 1884',
    shortPeriod: '1802–1884',
    title: 'Kinh Kỳ & Điêu Khắc Cung Đình',
    subtitle: 'Quy chuẩn gỗ lim, pháp lam và đồ ngự dụng triều Nguyễn',
    galleryRoom: 'Phòng Trưng Bày I',
    thesis:
      'Thời kỳ xác lập hệ thống biểu tượng cung đình mang tính quy chuẩn cao: từ hệ vì kèo chồng rường giả thủ chạm khắc tinh xảo đến dòng gốm men lam đặt hàng cho nội phủ kinh thành Huế.',
  },
  {
    id: 'era-2',
    indexLabel: 'Phần 02',
    period: '1885 – 1924',
    shortPeriod: '1885–1924',
    title: 'Giao Thoa Đô Thị & Phố Thị Đầu Thế Kỷ',
    subtitle: 'Sự chuyển dịch của nhà ống thương nghiệp và vật liệu nung',
    galleryRoom: 'Phòng Trưng Bày II',
    thesis:
      'Các đô thị cổ như Hà Nội và Sài Gòn chứng kiến sự hòa quyện giữa kết cấu khung gỗ truyền thống với vôi vữa, cửa chớp lá sách, lan can sắt uốn và ngói âm dương.',
  },
  {
    id: 'era-3',
    indexLabel: 'Phần 03',
    period: '1925 – 1945',
    shortPeriod: '1925–1945',
    title: 'Trường Mỹ Thuật Đông Dương & Sơn Mài Hiện Đại',
    subtitle: 'Từ nghề sơn truyền thống đến ngôn ngữ tạo hình hiện đại',
    galleryRoom: 'Phòng Trưng Bày III',
    thesis:
      'Sự ra đời của Trường Cao đẳng Mỹ thuật Đông Dương năm 1925 đã mở ra cuộc đối thoại sâu sắc giữa kỹ thuật sơn ta, vỏ trứng, vàng quỳ với bố cục không gian phương Tây.',
  },
  {
    id: 'era-4',
    indexLabel: 'Phần 04',
    period: '1946 – 1985',
    shortPeriod: '1946–1985',
    title: 'Kiến Trúc Nhiệt Đới Hóa & Công Trình Công Cộng',
    subtitle: 'Lam chắn nắng bê tông và bản sắc khí hậu bản địa',
    galleryRoom: 'Phòng Trưng Bày IV',
    thesis:
      'Thế hệ kiến trúc sư Việt Nam đầu tiên đã giải quyết bài toán khí hậu nhiệt đới gió mùa bằng những mảng hoa gió bê tông đúc sẵn, hành lang sâu và thông gió tự nhiên.',
  },
  {
    id: 'era-5',
    indexLabel: 'Phần 05',
    period: '1986 – 2026',
    shortPeriod: '1986–2026',
    title: 'Đương Đại, Bảo Tồn & Vật Liệu Bản Địa Mới',
    subtitle: 'Tái sinh tre tầm vông, gạch mộc và ký ức không gian',
    galleryRoom: 'Phòng Trưng Bày V',
    thesis:
      'Kiến trúc và mỹ thuật đương đại quay trở lại đối thoại với vật liệu thủ công thuần Việt — tre uốn cong, gạch nung không trát và mặt nước điều hòa vi khí hậu.',
  },
];

export const ARTIFACTS: ArtifactItem[] = [
  {
    id: 'art-1842-hue',
    accessionNumber: 'ACC. 1842.09.01',
    eraId: 'era-1',
    year: 1842,
    yearDisplay: 'Khoảng 1842',
    title: 'Bệ Rường Chạm Rồng Thếp Vàng & Chóe Men Lam Nội Phủ',
    maker: 'Tượng cục Nghệ nhân Kinh thành Huế',
    discipline: 'Điêu khắc & Gốm',
    galleryRoom: 'Phòng I',
    medium: 'Gỗ lim chạm lộng thếp vàng quỳ; Gốm men lam vẽ tích Long Vân',
    dimensions: 'Cấu kiện gỗ: 78 × 54 × 11 cm · Chóe gốm: Cao 44 cm, ĐK 36 cm',
    origin: 'Kinh thành Huế, Thừa Thiên Huế',
    provenance: [
      '1842: Chế tác phục vụ trùng tu điện thái miếu triều Thiệu Trị.',
      '1958: Được chuyển giao về kho bảo quản di tích cố đô.',
      '2019: Phục chế bề mặt thếp vàng và đưa vào bộ sưu tập trưng bày chuyên đề.',
    ],
    summary:
      'Cặp hiện vật tiêu biểu cho sự đối thoại giữa nghệ thuật mộc cung đình và đồ sứ men lam vẽ tay thế kỷ XIX.',
    curatorialEssay: [
      'Bệ rường (kẻ góc) bằng gỗ lim Thanh Hóa được đục chạm theo kỹ thuật kênh bong nhiều lớp. Hình tượng rồng năm móng ẩn hiện trong tầng mây xoắn ốc vừa đảm nhiệm chức năng liên kết kết cấu cột–xà, vừa tạo nhịp điệu thị giác trang nghiêm dưới ánh sáng nghiêng của hiên điện.',
      'Đặt cạnh cấu kiện gỗ là chiếc chóe men lam dáng tròn đầy, vẽ thủ công bằng mực cô-ban trên nền men rạn ngà. Sự tương phản giữa bề mặt thếp vàng ấm sâu của gỗ và sắc xanh lam lạnh của men gốm cho thấy trình độ phối hợp chất liệu tinh tế của các xưởng thủ công cung đình.',
    ],
    marginNote: {
      reference: 'Tư liệu Khâm Định Đại Nam Hội Điển',
      text: 'Quy chuẩn chạm khắc gỗ lim cung đình quy định rõ mật độ vân mây và số lớp kênh bong theo cấp bậc công trình.',
    },
    figureCaption: 'Hình 1 — Cấu kiện gỗ lim chạm rồng thếp vàng bên chóe gốm men lam, thế kỷ XIX.',
    imageUrl: hueImperialImg,
  },
  {
    id: 'art-1868-truss',
    accessionNumber: 'ACC. 1868.03.14',
    eraId: 'era-1',
    year: 1868,
    yearDisplay: '1868',
    title: 'Bản Đo Đạc Hệ Vì Kèo Chồng Rường Ba Gian Hai Chái',
    maker: 'Ban Trắc vẽ Di tích & Cục Công chính',
    discipline: 'Kiến trúc',
    galleryRoom: 'Phòng I',
    medium: 'Mực nho và bút sắt trên giấy dó bồi lụa',
    dimensions: '84 × 118 cm (Tỷ lệ bản vẽ 1:20)',
    origin: 'Phủ Thừa Thiên',
    provenance: [
      '1868: Lập hồ sơ khảo sát kỹ thuật trước đợt tu bổ mái ngói liệt.',
      '1994: Số hóa và đối chiếu tại Viện Nghiên cứu Kiến trúc Cổ.',
    ],
    summary:
      'Bản vẽ mặt cắt ngang giải mã nguyên lý chịu lực hoàn toàn bằng mộng gỗ không dùng đinh sắt của nhà rường Huế.',
    curatorialEssay: [
      'Khác với kết cấu tường chịu lực phương Tây, kiến trúc gỗ truyền thống Việt Nam đặt toàn bộ tải trọng mái ngói lên hệ cột cái và cột quân thông qua các thanh trến, rường cụt và con chồng.',
      'Hệ mộng thắt mang cá cho phép khung nhà có độ đàn hồi tự nhiên trước gió bão miền Trung, đồng thời có thể tháo rời từng cấu kiện để bảo dưỡng sau nhiều thập kỷ.',
    ],
    marginNote: {
      reference: 'Ghi chú Kết cấu I.2',
      text: 'Độ dốc mái 32° kết hợp phần hiên đua sâu giúp nước mưa thoát nhanh mà vẫn che nắng gắt hướng Tây.',
    },
    figureCaption: 'Hình 2 — Bản vẽ mặt cắt kỹ thuật hệ vì kèo chồng rường Huế (tỷ lệ 1:20).',
    plateType: 'truss-hue',
    plateCode: 'BẢN VẼ MẶT CẮT · TỶ LỆ 1:20',
  },
  {
    id: 'art-1912-facade',
    accessionNumber: 'ACC. 1912.06.04',
    eraId: 'era-2',
    year: 1912,
    yearDisplay: '1912',
    title: 'Hồ Sơ Mặt Đứng Nhà Phố Thương Nghiệp Phố Hàng Đào',
    maker: 'Sở Đo đạc Đô thị Hà Nội',
    discipline: 'Tư liệu đô thị',
    galleryRoom: 'Phòng II',
    medium: 'Bản vẽ kỹ thuật mực tím và màu nước trên giấy can vải',
    dimensions: '62 × 88 cm',
    origin: 'Khu 36 Phố Phường, Hà Nội',
    provenance: [
      '1912: Lưu trữ trong tập hồ sơ cấp phép cải tạo mặt tiền phố cổ.',
      '2008: Hiến tặng cho Trung tâm Tư liệu Đô thị.',
    ],
    summary:
      'Tài liệu đo vẽ tỷ lệ mặt tiền nhà ống hai tầng thời kỳ chuyển tiếp giữa kiến trúc phố thị cổ và ảnh hưởng Tân cổ điển.',
    curatorialEssay: [
      'Bản vẽ cho thấy sự thích ứng tài tình của người thợ nề Hà Nội: chiều ngang hẹp 4,2 mét được tổ chức thành ba nhịp cửa vòm cao để lấy sáng sâu vào lòng nhà, phía trên vẫn giữ hàng con sơn đỡ mái ngói ta truyền thống.',
    ],
    marginNote: {
      reference: 'Lưu trữ Đô thị II.1',
      text: 'Chiều cao tầng trệt 3,9m tạo không gian thông thoáng cho cửa hiệu buôn bán tơ lụa và sách vở.',
    },
    figureCaption: 'Hình 3 — Bản đồ án mặt đứng nhà phố thương nghiệp năm 1912.',
    plateType: 'facade-hanoi',
    plateCode: 'TƯ LIỆU QUY HOẠCH · 1912',
  },
  {
    id: 'art-1921-hanoi',
    accessionNumber: 'ACC. 1921.11.08',
    eraId: 'era-2',
    year: 1921,
    yearDisplay: '1921',
    title: 'Mặt Tiền Hiệu Sách & Nhà Phố Giao Thoa Đông–Tây',
    maker: 'Tác giả khuyết danh (Lưu trữ ảnh tư liệu)',
    discipline: 'Tư liệu đô thị',
    galleryRoom: 'Phòng II',
    medium: 'Ảnh tư liệu phim kính bạc gelatin, in phóng lưu trữ trên giấy cotton',
    dimensions: '48 × 64 cm',
    origin: 'Phố Tràng Tiền – Hàng Trống, Hà Nội',
    provenance: [
      '1921: Chụp phục vụ khảo sát kiến trúc dân dụng Bắc Kỳ.',
      '2015: Phục chế bản in archival pigment từ phim kính gốc.',
    ],
    summary:
      'Bức ảnh ghi lại đời sống thị dân đầu thế kỷ XX bên mặt tiền nhà phố vôi vàng, cửa chớp gỗ và ban công sắt uốn.',
    curatorialEssay: [
      'Cửa chớp lá sách (persienne) trở thành biểu tượng thị giác của đô thị Việt Nam đầu thế kỷ XX. Khi đóng kín, các khe gỗ nghiêng vẫn cho phép luồng gió mát xuyên qua đồng thời lọc dịu ánh nắng chói chang bên ngoài.',
      'Bên dưới ban công sắt hoa văn uốn lượn là biển hiệu song ngữ Quốc ngữ – Pháp văn, phản ánh tầng lớp trí thức và tiểu thương mới đang định hình diện mạo văn hóa đô thị hiện đại.',
    ],
    marginNote: {
      reference: 'Tư liệu Ảnh Cổ Hà Nội',
      text: 'Lớp vữa vôi pha đất sét tạo nên sắc vàng đặc trưng có khả năng chống ẩm mốc tự nhiên trong mùa nồm.',
    },
    figureCaption: 'Hình 4 — Tư liệu mặt tiền nhà phố hiệu sách Hà Nội đầu thập niên 1920.',
    imageUrl: hanoiUrbanImg,
  },
  {
    id: 'art-1934-lacquer',
    accessionNumber: 'ACC. 1934.04.22',
    eraId: 'era-3',
    year: 1934,
    yearDisplay: '1934',
    title: 'Bến Đò Đầm Sen & Cây Đa Cổ Thụ (Sơn Mài Khắc Bồi)',
    maker: 'Xưởng sáng tác khóa đầu Trường Mỹ thuật Đông Dương',
    discipline: 'Hội họa & Sơn mài',
    galleryRoom: 'Phòng III',
    medium: 'Sơn ta, son tươi, vỏ trứng vịt, vàng quỳ và bạc dát mài nước trên vóc gỗ',
    dimensions: '92 × 124 cm',
    origin: 'Hà Nội',
    provenance: [
      '1934: Triển lãm thường niên Hội Khai Trí Tiến Đức.',
      '1976: Chuyển về bộ sưu tập mỹ thuật cận đại.',
    ],
    summary:
      'Tác phẩm đánh dấu bước chuyển mình của sơn mài từ chất liệu trang trí thủ công sang hội họa giá vẽ có chiều sâu không gian.',
    curatorialEssay: [
      'Nhờ kỹ thuật mài nước nhiều tầng lớp, nghệ sĩ tạo ra độ sâu thăm thẳm của mặt nước đầm sen và sương khói vùng trung du. Những mảnh vỏ trứng đập dập tinh tế tạo nên sắc trắng ngà cho cánh hoa sen, đối lập với sắc son thắm và ánh vàng rực của tán cây đa.',
      'Ánh sáng trong tranh sơn mài không đến từ một nguồn chiếu đơn thuần mà phát lộ từ bên trong các lớp nhựa cánh gián trong suốt phủ trên vàng quỳ.',
    ],
    marginNote: {
      reference: 'Kỹ thuật Sơn ta Phú Thọ',
      text: 'Mỗi bức vóc phải trải qua tối thiểu 12 công đoạn bó hom, sơn lót và ủ ẩm trước khi bắt đầu vẽ màu.',
    },
    figureCaption: 'Hình 5 — Tranh sơn mài "Bến đò đầm sen & cây đa cổ thụ", 1934.',
    imageUrl: lacquerIndochineImg,
  },
  {
    id: 'art-1938-grid',
    accessionNumber: 'ACC. 1938.07.19',
    eraId: 'era-3',
    year: 1938,
    yearDisplay: '1938',
    title: 'Phác Thảo Bố Cục Bình Phong Sáu Tấm & Tỷ Lệ Vàng',
    maker: 'Xưởng Nghiên cứu Tạo hình Đông Dương',
    discipline: 'Hội họa & Sơn mài',
    galleryRoom: 'Phòng III',
    medium: 'Than chì, mực tàu và phấn trắng trên giấy bồi nâu',
    dimensions: '56 × 104 cm',
    origin: 'Hà Nội',
    provenance: [
      '1938: Bản nghiên cứu bố cục chuẩn bị cho bức bình phong triển lãm quốc tế.',
      '2004: Bảo quản trong tủ hồ sơ giấy acid-free.',
    ],
    summary:
      'Bản phác họa cho thấy cách các họa sĩ Đông Dương kết hợp nhịp điệu liên hoàn của bình phong Á Đông với lưới phân chia tỷ lệ cổ điển.',
    curatorialEssay: [
      'Thay vì chia cắt sáu cánh bình phong thành sáu bức tranh rời rạc, đường nét chuyển động của thân tre và dòng sông được dẫn nối liên tục qua các khe gập, tạo cảm giác không gian ôm trọn người thưởng lãm.',
    ],
    marginNote: {
      reference: 'Hồ sơ Phác thảo III.4',
      text: 'Đường chân trời được đẩy lên cao ở 2/3 khung hình theo truyền thống thủy mặc phương Đông.',
    },
    figureCaption: 'Hình 6 — Sơ đồ phân tích nhịp điệu bố cục trên bình phong sáu tấm, 1938.',
    plateType: 'lacquer-grid',
    plateCode: 'PHÁC THẢO BỐ CỤC · 1938',
  },
  {
    id: 'art-1962-modernism',
    accessionNumber: 'ACC. 1962.05.12',
    eraId: 'era-4',
    year: 1962,
    yearDisplay: '1962 – 1968',
    title: 'Mặt Đứng Lam Chắn Nắng Công Trình Giảng Đường Nhiệt Đới',
    maker: 'Thế hệ Kiến trúc sư Hiện đại Miền Nam',
    discipline: 'Kiến trúc',
    galleryRoom: 'Phòng IV',
    medium: 'Bê tông cốt thép đúc tại chỗ kết hợp gạch hoa gió xi măng',
    dimensions: 'Mô hình tỷ lệ 1:50 & Ảnh tư liệu khổ lớn (70 × 95 cm)',
    origin: 'Sài Gòn – TP. Hồ Chí Minh',
    provenance: [
      '1964: Hoàn thành cụm giảng đường nghệ thuật và thư viện.',
      '2021: Khảo sát di sản kiến trúc hiện đại giữa thế kỷ XX.',
    ],
    summary:
      'Ví dụ mẫu mực của kiến trúc hiện đại nhiệt đới hóa: biến kết cấu chắn nắng thành điêu khắc hình học sống động dưới ánh nắng phương Nam.',
    curatorialEssay: [
      'Các kiến trúc sư thập niên 1960 không sao chép mặt kính kín của phương Tây. Họ đặt một lớp vỏ bê tông đúc rỗng (brise-soleil) cách tường chính 1,4 mét, tạo thành hành lang đệm bóng râm và đối lưu không khí liên tục.',
      'Khi mặt trời di chuyển từ Đông sang Tây, hệ lam hình học lại vẽ lên sàn hành lang những mảng sáng tối biến đổi theo từng giờ trong ngày.',
    ],
    marginNote: {
      reference: 'Chuyên khảo Kiến trúc Nhiệt đới',
      text: 'Lớp hành lang đệm giúp giảm nhiệt độ bề mặt tường trong nhà từ 4°C đến 6°C mà không cần điều hòa cơ khí.',
    },
    figureCaption: 'Hình 7 — Hệ lam chắn nắng bê tông trên công trình giáo dục thập niên 1960.',
    imageUrl: tropicalModernismImg,
  },
  {
    id: 'art-1968-breeze',
    accessionNumber: 'ACC. 1968.10.03',
    eraId: 'era-4',
    year: 1968,
    yearDisplay: '1968',
    title: 'Chi Tiết Module Gạch Hoa Gió & Mặt Cắt Đón Gió Tự Nhiên',
    maker: 'Xưởng Thực nghiệm Vật liệu Xây dựng',
    discipline: 'Kiến trúc',
    galleryRoom: 'Phòng IV',
    medium: 'Bản vẽ kỹ thuật trên giấy can kiến trúc, mực in xanh',
    dimensions: '60 × 84 cm',
    origin: 'Sài Gòn & Hà Nội',
    provenance: [
      '1968: Tập bản vẽ chuẩn hóa module vật liệu đúc sẵn.',
      '2018: Phục dựng mô phỏng khí động học trong trưng bày.',
    ],
    summary:
      'Bản thiết kế module kích thước 30×30 cm tối ưu hóa góc cản mưa hắt nhưng vẫn mở rộng tiết diện đón gió mùa Đông Nam.',
    curatorialEssay: [
      'Hình học của viên gạch hoa gió không thuần túy để trang trí: các cạnh vát nghiêng 45 độ đóng vai trò như tấm hướng dòng khí mát đi vào trần nhà và đẩy khí nóng thoát qua ô cửa đối diện.',
    ],
    marginNote: {
      reference: 'Thông số Module IV.2',
      text: 'Kích thước chuẩn 300 × 300 × 120 mm cho phép hai người thợ lắp dựng nhanh bằng vữa xi măng cát vàng.',
    },
    figureCaption: 'Hình 8 — Chi tiết hình học module hoa gió bê tông đúc sẵn, 1968.',
    plateType: 'brise-soleil',
    plateCode: 'CHI TIẾT MODULE · 1968',
  },
  {
    id: 'art-2016-bamboo',
    accessionNumber: 'ACC. 2016.08.30',
    eraId: 'era-5',
    year: 2016,
    yearDisplay: '2016',
    title: 'Không Gian Vòm Tre Đan & Gạch Đất Nung Bên Hồ Nước',
    maker: 'Nhóm Kiến trúc Sáng tạo Vật liệu Bản địa',
    discipline: 'Kiến trúc',
    galleryRoom: 'Phòng V',
    medium: 'Tre tầm vông xử lý tự nhiên, lạt buộc mây và gạch đất nung thủ công',
    dimensions: 'Nhịp vòm chính: Rộng 14,5 m · Cao 8,2 m',
    origin: 'Bình Dương & Đồng bằng Bắc Bộ',
    provenance: [
      '2016: Xây dựng làm không gian sinh hoạt văn hóa cộng đồng.',
      '2025: Đưa vào hồ sơ triển lãm Kiến trúc Bền vững Việt Nam.',
    ],
    summary:
      'Sự trở lại đầy thi vị của cây tre Việt Nam trong vai trò kết cấu vượt nhịp lớn, kết hợp tường gạch mộc và mặt nước điều hòa vi khí hậu.',
    curatorialEssay: [
      'Bằng cách bó hàng chục thân tre tầm vông dẻo dai lại với nhau và chốt bằng chốt tre truyền thống, công trình tạo nên những mái vòm cong mềm mại gợi nhớ mái đình làng cổ nhưng mang tinh thần không gian đương đại.',
      'Hồ nước nông bao quanh không chỉ nhân đôi vẻ đẹp cấu trúc qua hình ảnh phản chiếu mà còn làm mát luồng gió trước khi thổi vào lòng nhà.',
    ],
    marginNote: {
      reference: 'Hồ sơ Vật liệu Xanh V.1',
      text: 'Tre tầm vông được ngâm bùn và hun khói theo phương pháp dân gian giúp tăng tuổi thọ kết cấu lên trên 30 năm.',
    },
    figureCaption: 'Hình 9 — Công trình vòm tre đan và tường gạch đất nung phản chiếu trên mặt nước.',
    imageUrl: contemporaryBambooImg,
  },
  {
    id: 'art-2024-vault',
    accessionNumber: 'ACC. 2024.02.15',
    eraId: 'era-5',
    year: 2024,
    yearDisplay: '2024 – 2026',
    title: 'Biểu Đồ Chịu Lực Vòm Tre Hyperbolic & Luồng Đối Lưu Tự Nhiên',
    maker: 'Phòng Thí nghiệm Kết cấu Sinh thái',
    discipline: 'Kiến trúc',
    galleryRoom: 'Phòng V',
    medium: 'Bản vẽ tham số học in trên giấy mỹ thuật không axit',
    dimensions: '70 × 100 cm',
    origin: 'Hà Nội & TP. Hồ Chí Minh',
    provenance: [
      '2024: Nghiên cứu kết hợp tri thức thủ công truyền thống và mô phỏng kết cấu số.',
    ],
    summary:
      'Minh họa cách kết nối tư duy thiết kế tham số hiện đại với kỹ thuật đan lạt và uốn tre thủ công của nghệ nhân làng nghề.',
    curatorialEssay: [
      'Sơ đồ cho thấy mỗi đường cong của mái tre đều tuân theo đường truyền lực nén tự nhiên, giúp giảm thiểu tối đa lực uốn gãy tại các khớp nối và tận dụng tối đa sức bền kéo nén dọc thớ của cây tre.',
    ],
    marginNote: {
      reference: 'Phụ lục Kết cấu Đương đại',
      text: 'Đỉnh vòm mở khe thoát khí nóng giúp không gian bên dưới luôn thoáng mát mà không cần hệ thống làm mát nhân tạo.',
    },
    figureCaption: 'Hình 10 — Sơ đồ phân tích kết cấu vòm tre đối lưu không khí, 2024–2026.',
    plateType: 'bamboo-vault',
    plateCode: 'NGHIÊN CỨU KẾT CẤU · 2024',
  },
];

export const CURATORIAL_ESSAY = {
  kicker: 'TIỂU LUẬN GIÁM TUYỂN · BẢO TÀNG DI SẢN',
  title: 'Tính Liên Tục Của Chất Liệu Trong Nghệ Thuật Và Kiến Trúc Việt',
  subtitle: 'Từ gỗ lim cung đình đến vòm tre đương đại qua hơn hai thế kỷ chuyển mình',
  author: 'Giám tuyển Trần Minh Khuê · Ban Nghiên Cứu Lưu Trữ',
  publishedDate: 'Ấn bản Thu 2026',
  paragraphs: [
    'Trong suốt hơn hai trăm năm biến động từ đầu thế kỷ XIX đến nay, diện mạo kiến trúc và mỹ thuật tạo hình Việt Nam không vận động theo những đứt gãy hoàn toàn, mà tựa như một dòng chảy tiếp nối đầy bản lĩnh. Khi quan sát các hiện vật đặt cạnh nhau trên trục thời gian, điều dễ nhận thấy nhất không chỉ là sự thay đổi của hình thức bề mặt, mà là cách người thợ và người nghệ sĩ luôn tìm về mối đối thoại trung thực với khí hậu và chất liệu bản địa.',
    'Nếu người thợ mộc thế kỷ XIX gửi gắm triết lý ứng xử với tự nhiên qua hệ mộng gỗ lim mềm dẻo trước bão gió, thì các kiến trúc sư giữa thế kỷ XX lại chuyển hóa tinh thần ấy sang bê tông hoa gió để lọc ánh nắng gay gắt của phương Nam. Ở giữa hai thái cực đó là cuộc bừng nở của hội họa sơn mài Đông Dương — nơi chất nhựa cây bản địa được nâng tầm thành ngôn ngữ tạo hình sâu lắng bậc nhất châu Á.',
    'Bước sang thế kỷ XXI, sự quay trở lại của tre tầm vông và gạch đất nung không phải là nỗi hoài cổ thụ động. Đó là nỗ lực tiếp nối mạch nguồn tri thức dân gian bằng tư duy kết cấu hiện đại, khẳng định rằng di sản sống chỉ thực sự bền vững khi tiếp tục thở cùng đời sống đương đại.',
  ],
  pullQuote:
    '“Mỗi công trình và tác phẩm thủ công thực chất là một câu trả lời bằng vật chất trước ánh sáng, độ ẩm và ký ức của vùng đất mà nó sinh ra.”',
  marginCallouts: [
    {
      anchor: 'Ghi chú 01',
      title: 'Ngôn ngữ khí hậu nhiệt đới',
      body: 'Từ hàng hiên sâu của nhà rường Huế đến lớp hành lang đệm (loggia) năm 1962, khoảng chuyển tiếp giữa trong và ngoài luôn là linh hồn của không gian Việt.',
    },
    {
      anchor: 'Ghi chú 02',
      title: 'Sự chuyển hóa của sơn ta',
      body: 'Khác với sơn mài Nhật Bản chú trọng bề mặt bóng láng tuyệt đối, sơn mài Việt Nam khai thác độ sâu mờ ảo của nhiều lớp mài nước đan xen.',
    },
  ],
  footnotes: [
    {
      id: 1,
      text: 'Số liệu đo đạc hệ vì kèo gỗ lim tham chiếu từ hồ sơ khảo sát di tích Cố đô Huế giai đoạn 1994–2018.',
    },
    {
      id: 2,
      text: 'Tư liệu về Trường Cao đẳng Mỹ thuật Đông Dương (1925–1945) lưu trữ tại kho tư liệu chuyên đề phòng III.',
    },
    {
      id: 3,
      text: 'Các bản vẽ lam chắn nắng và mô hình tre đương đại được đối chiếu trực tiếp với hiện vật trưng bày tại phòng IV và V.',
    },
  ],
};
