import { LocaleData } from "@/type";
import viVN from "antd/locale/vi_VN";

const localeData: LocaleData = {
  antLocale: viVN,
  logo: "Photo Smaller",
  initial: "Đang khởi tạo",
  previewHelp:
    "Kéo đường phân chia để so sánh hiệu quả nén: bên trái là ảnh gốc, bên phải là ảnh nén",
  uploadCard: {
    title: "Chọn file tại đây, hỗ trợ kéo file và thư mục",
    subTitle: "Công cụ nén ảnh hàng loạt mã nguồn mở, hỗ trợ %s format",
  },
  listAction: {
    batchAppend: "Thêm ảnh",
    addFolder: "Thêm thư mục",
    clear: "Xóa tất cả",
    downloadAll: "Lưu tất cả",
    downloadOne: "Lưu hình ảnh",
    removeOne: "Xóa hình ảnh",
    reCompress: "Giải nén",
  },
  columnTitle: {
    status: "Trạng thái",
    name: "Tên",
    preview: "Xem trước",
    size: "Kích thước",
    dimension: "Kích thước",
    decrease: "Giảm",
    action: "Hành động",
    newSize: "Kích thước mới",
    newDimension: "Kích thước mới",
  },
  optionPannel: {
    failTip: "Không thể nhỏ hơn, vui lòng điều chỉnh các thông số và thử lại.",
    help: "Photo Smaller là một ứng dụng nén ảnh hàng loạt. Các sửa đổi đối với tùy chọn sẽ được áp dụng cho tất cả các ảnh.",
    resizeLable: "Thay đổi kích thước hình ảnh",
    jpegLable: "Thông số JPEG/WEBP",
    pngLable: "tham số PNG",
    gifLable: "Thông số GIF",
    avifLable: "tham số AVIF",
    resizePlaceholder: "Chọn chế độ điều chỉnh",
    fitWidth: "Đặt chiều rộng, chiều cao tự động chia tỷ lệ",
    fitHeight: "Đặt chiều cao, chiều rộng tự động chia tỷ lệ",
    widthPlaceholder: "Đặt chiều rộng của hình ảnh đầu ra",
    heightPlaceholder: "Đặt chiều cao của hình ảnh đầu ra",
    resetBtn: "Đặt lại",
    confirmBtn: "Áp dụng các tùy chọn",
    qualityTitle: "Đặt chất lượng hình ảnh đầu ra (0-1)",
    colorsDesc: "Đặt số lượng màu đầu ra (2-256)",
    pngDithering: "Đặt hệ số phối màu (0-1)",
    gifDithering: "Bật phối màu",
    avifQuality: "Đặt chất lượng hình ảnh đầu ra (1-100)",
    avifSpeed: "Đặt tốc độ nén (1-10)",
    outputFormat: "Đặt định dạng đầu ra",
    outputFormatPlaceholder: "Chọn định dạng ảnh đầu ra",
    transparentFillDesc: "Chọn màu tô trong suốt",
  },
  error404: {
    backHome: "Quay lại trang chủ",
    description: "Xin lỗi, trang bạn truy cập không tồn tại",
  },
  progress: {
    before: "Trước khi nén",
    after: "Sau khi nén",
    rate: "Tỷ lệ giảm",
  },
};

export default localeData;
