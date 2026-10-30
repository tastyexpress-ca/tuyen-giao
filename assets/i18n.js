/* ============ Ngôn ngữ VI / EN cho các trang KHÁCH (Chris 2026-10-26) ============
   Luồng: trang mở đầu → trang chọn ngôn ngữ (../ngon-ngu/) → trang chính.
   Lựa chọn lưu ở localStorage "te-lang" (mặc định "vi").
   Tiếng Việt là ngôn ngữ gốc trong mã nguồn; khi máy chọn English, lớp
   dịch này chạy trên DOM: dịch chữ giao diện theo từ điển + mẫu câu động.
   Tên món, tên tiệm, tên khách, ghi chú đơn là DỮ LIỆU — không dịch.
   App bếp (trang chủ gốc) KHÔNG dùng file này — bếp chỉ tiếng Việt. */
(function () {
  var LANG = "vi";
  try { LANG = localStorage.getItem("te-lang") || "vi"; } catch (e) {}
  window.__LANG__ = LANG;

  function wireToggle() {
    var btns = document.querySelectorAll(".lang-toggle");
    for (var i = 0; i < btns.length; i++) {
      if (LANG === "en") btns[i].textContent = "🌐 VI";
      btns[i].addEventListener("click", function () {
        try { localStorage.setItem("te-lang", LANG === "en" ? "vi" : "en"); } catch (e) {}
        location.reload();
      });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wireToggle);
  else wireToggle();

  if (LANG !== "en") return;
  document.documentElement.lang = "en";

  var DICT = {
    /* ----- Trang chính / home ----- */
    "📱 Tasty Express — Nơi hội tụ món ngon Bolsa": "📱 Tasty Express — Bolsa's home of great food",
    "Tasty Express — Hệ Thống Các Tiệm": "Tasty Express — Our Shops",
    "Hệ Thống Các Tiệm": "Our Shops",
    "Các Tiệm": "Shops",
    "Hệ Thống": "Shops",
    "Tasty Express là nơi bạn có thể lựa chọn những món ăn thuần tuý Việt từ những nhà hàng nổi tiếng ở Bolsa — bạn có thể pick up hoặc được giao đến tận nơi.": "Tasty Express is where you can choose authentic Vietnamese dishes from Bolsa's well-known restaurants — for pickup or delivered right to your door.",
    "Đăng nhập": "Log in",
    "Đăng xuất": "Log out",
    "Tiếp tục với khách": "Continue as guest",
    "🏪 Bạn có tiệm? Hãy làm thành viên phục vụ thực khách với Tasty Express →": "🏪 Own a restaurant? Join Tasty Express to serve our customers →",
    "🏪 Nhà hàng check-in": "🏪 Restaurant check-in",
    "📤 Chia sẻ app": "📤 Share the app",
    "Chia sẻ": "Share",
    "✓ Đã chép link app": "✓ App link copied",
    "Cài app Tasty Express:": "Install the Tasty Express app:",
    "bấm nút": "tap the",
    "rồi chọn": "button, then choose",
    "“Thêm vào Màn hình chính”": "“Add to Home Screen”",
    "Đóng": "Close",

    /* ----- Thẻ tiệm (cac-tiem) ----- */
    "← Trang chính": "← Home",
    "← Hệ Thống Các Tiệm": "← Our Shops",
    "Bếp chuyên cơm phần và cơm tháng kiểu cơm nhà: mỗi phần gồm cơm, 1 món mặn, 1 món xào và 1 canh, thực đơn thay đổi theo từng ngày trong tuần.": "Home-style set meals and monthly meal plans: each portion comes with rice, 1 main dish, 1 stir-fry and 1 soup, with a menu that changes daily.",
    "Giao đến tận nơi trong phạm vi 9 miles từ tiệm: 9am–11am hoặc 7pm–9pm": "Delivery within 9 miles of the shop: 9am–11am or 7pm–9pm",
    "Pick up: 8:00 AM – 8:00 PM, Thứ 2 – Thứ 7": "Pick up: 8:00 AM – 8:00 PM, Mon – Sat",
    "Đặt cơm online": "Order food online",
    "Đặt kem online": "Order ice cream online",
    "Gọi tiệm": "Call the shop",
    "Kem nhà làm 10 vị: Coffee, Chocolate, Green Tea, Thai Tea, Ube, Mango, Strawberry, Cookie, Vanilla, Sesame. Ly lẻ $2 — Combo 18 ly $25.": "Homemade ice cream in 10 flavors: Coffee, Chocolate, Green Tea, Thai Tea, Ube, Mango, Strawberry, Cookie, Vanilla, Sesame. Single cup $2 — 18-cup combo $25.",
    "🎉 Khai trương 1/11/2026 · 4PM–9PM — Mua 1 Tặng 1": "🎉 Grand opening 11/1/2026 · 4PM–9PM — Buy 1 Get 1 Free",
    "Ship to CA, NV & AZ — gửi cơm nhà đi xa cho người thân: món nấu tươi trong ngày, đóng gói kỹ, ship nhanh qua đêm.": "Ship to CA, NV & AZ — send home-style meals to loved ones far away: cooked fresh daily, carefully packed, shipped overnight.",
    "Đặt hàng trước 2PM hôm nay — nhận hàng trước 5PM ngày mai!": "Order before 2PM today — get it before 5PM tomorrow!",
    "Gọi đặt ship": "Call to order shipping",
    "Kem mịn, vị ube thơm béo đúng gu. Cả nhà mình ai cũng mê!": "Smooth ice cream, and the ube is rich and fragrant — just right. Our whole family loves it!",
    "Combo 18 ly tiện lắm, để dành ăn dần, vị nào cũng ngon.": "The 18-cup combo is so handy to keep in the freezer — every flavor is delicious.",
    "Kem trà xanh thơm, không quá ngọt. Ăn là ghiền!": "The green tea flavor is fragrant and not too sweet. One taste and you're hooked!",
    "Đặt online giao nhanh, kem tới nơi còn lạnh cứng, ngon như ăn ở tiệm.": "Fast delivery when ordering online — it arrives still frozen solid, just like eating at the shop.",
    "Khách hàng đánh giá": "Customer reviews",
    "Cơm ngon như cơm nhà nấu, giao đúng giờ. Cả nhà mình đặt cơm tháng luôn!": "Tastes just like home cooking and arrives on time. Our whole family is on the monthly plan!",
    "Phần cơm đầy đặn, thực đơn thay đổi mỗi ngày, ăn hoài không ngán.": "Generous portions and a menu that changes daily — you never get tired of it.",
    "Món mặn đậm đà, canh ngọt thanh. Ăn một lần là ghiền!": "Rich, savory mains and light, sweet soups. One try and you're hooked!",
    "Đặt online nhanh gọn, cơm giao tới nơi còn nóng hổi.": "Ordering online is quick and easy, and the food arrives still steaming hot.",
    "Tìm tiệm hoặc món ăn": "Search shops or dishes",
    "Tìm tiệm hoặc món ăn…": "Search shops or dishes…",
    "🍽 Có món: ": "🍽 Has dish: ",
    "Review trước": "Previous review",
    "Review kế tiếp": "Next review",

    /* ----- Điều khoản (cac-tiem) ----- */
    "📌 Khách hàng lưu ý": "📌 Please note",
    "📌 Khách hàng lưu ý — Điều khoản đặt hàng": "📌 Please note — Ordering terms",
    "1. Xác nhận đơn:": "1. Order confirmation:",
    "Đơn chỉ được chuẩn bị sau khi thanh toán thành công. Các món đều nấu mới theo đơn, vì vậy bạn vui lòng đặt trước để tiệm chuẩn bị.": "Your order is prepared only after payment succeeds. Every dish is cooked fresh to order, so please order ahead so the shop can prepare it.",
    "2. Huỷ đơn & hoàn tiền:": "2. Cancellation & refunds:",
    "Đơn đã vào bếp (đang chuẩn bị) sẽ không được huỷ và không hoàn tiền. Nếu cần huỷ, vui lòng liên hệ tiệm ngay trước khi đơn vào bếp.": "Once an order has entered the kitchen (being prepared), it cannot be cancelled or refunded. If you need to cancel, contact the shop right away, before your order enters the kitchen.",
    "3. Giao hàng:": "3. Delivery:",
    "Thời gian thực tế có thể thay đổi do giao thông và số lượng đơn trong chuyến.": "Actual times may vary with traffic and the number of orders on the trip.",
    "4. Nhận hàng:": "4. Receiving your order:",
    "Bạn có thể dặn để đồ ăn trước cửa nhà, không cần ở nhà chờ. Tuy nhiên, đồ ăn để ngoài trời có thể nhanh hư, nên tiệm khuyến khích bạn có mặt ở nhà trong thời gian giao hàng như đã dự kiến để nhận món lúc còn tươi ngon.": "You may ask for the food to be left at your door — no need to wait at home. However, food left outdoors can spoil quickly, so the shop recommends being home during the expected delivery window to receive it fresh.",
    "Bạn vui lòng đến lấy đơn trong giờ mở cửa của tiệm trong ngày. Đơn không được lấy trong ngày sẽ không được hoàn tiền vì món ăn được nấu tươi trong ngày.": "Please pick up your order during the shop's opening hours that day. Orders not picked up the same day cannot be refunded, as the food is cooked fresh that day.",
    "5. Thông tin giao hàng:": "5. Delivery information:",
    "Bạn chịu trách nhiệm về tính chính xác của địa chỉ và số điện thoại đã cung cấp. Phí giao hàng không được hoàn lại nếu giao không thành công do thông tin sai.": "You are responsible for the accuracy of the address and phone number you provide. The delivery fee is not refundable if delivery fails because of incorrect information.",
    "7. Dị ứng thực phẩm:": "7. Food allergies:",
    "Nếu bạn có dị ứng, vui lòng ghi rõ trong ghi chú khi đặt hàng. Các món được chế biến trong bếp dùng chung nên tiệm không cam kết tuyệt đối không tiếp xúc chéo với các nguyên liệu gây dị ứng.": "If you have an allergy, please state it clearly in the note when ordering. Dishes are prepared in a shared kitchen, so the shop cannot absolutely guarantee no cross-contact with allergenic ingredients.",
    "8. Chất lượng món:": "8. Food quality:",
    "Món ăn do tiệm trực tiếp chế biến. Nếu món ăn có vấn đề, bạn vui lòng liên hệ trực tiếp với tiệm (số điện thoại trên trang của tiệm) trong vòng 24 giờ kèm hình ảnh — tiệm là bên quyết định việc hỗ trợ, đổi món hoặc hoàn tiền cho món của mình. Tasty Express sẽ chuyển phản hồi của bạn đến tiệm để hỗ trợ điều phối.": "The shop prepares its own food. If there is a problem with a dish, please contact the shop directly (phone number on the shop's page) within 24 hours with photos — the shop decides on any support, replacement or refund for its own dishes. Tasty Express will pass your feedback to the shop to help coordinate.",
    "9. Giá & thực đơn:": "9. Prices & menu:",
    "Giá và thực đơn có thể thay đổi theo từng ngày; giá áp dụng là giá hiển thị tại thời điểm bạn đặt hàng.": "Prices and menus may change daily; the price that applies is the one shown at the time you place your order.",
    "10. Thanh toán:": "10. Payment:",
    "Thanh toán online bằng thẻ qua hệ thống bảo mật; Tasty Express không lưu trữ thông tin thẻ của bạn.": "Online card payment runs through a secure system; Tasty Express does not store your card information.",
    "11. Vai trò của Tasty Express:": "11. The role of Tasty Express:",
    "Tasty Express chỉ là nền tảng công nghệ kết nối thực khách với các nhà hàng đối tác và hỗ trợ thanh toán. Tasty Express không trực tiếp chế biến, đóng gói hay giao món ăn — các công đoạn này do từng tiệm và đơn vị giao hàng của tiệm thực hiện.": "Tasty Express is only a technology platform connecting diners with partner restaurants and supporting payment. Tasty Express does not itself prepare, pack or deliver food — each shop and its delivery service handle those steps.",
    "12. Giới hạn trách nhiệm:": "12. Limitation of liability:",
    "Tasty Express không chịu trách nhiệm đối với: chất lượng, hương vị, khẩu phần và vệ sinh an toàn của món ăn; tình trạng món khi đến nơi (hư hỏng, tràn đổ, nguội lạnh…) trong quá trình giao; và thời gian giao thực tế của tiệm. Mọi khiếu nại và yêu cầu bồi hoàn liên quan đến các nội dung trên thuộc trách nhiệm của tiệm bán món. Việc Tasty Express hỗ trợ liên lạc, điều phối (nếu có) là thiện chí hỗ trợ, không cấu thành việc Tasty Express nhận trách nhiệm thay cho tiệm.": "Tasty Express is not responsible for: the quality, taste, portion size or food safety of dishes; the condition of food on arrival (damage, spills, getting cold…) during delivery; or the shop's actual delivery time. All complaints and compensation claims on these matters are the responsibility of the shop selling the dish. Any help Tasty Express provides in contacting or coordinating is goodwill support and does not mean Tasty Express takes responsibility on the shop's behalf.",
    "Vui lòng nhắn tin": "Please text",
    "nếu cần được hỗ trợ.": "if you need support.",

    /* ----- Đặt món (dat-com / dat-kem / tiem dùng chung) ----- */
    "Giỏ hàng của bạn": "Your cart",
    "Giỏ hàng và thanh toán": "Cart & checkout",
    "Nhấn để xem giỏ & thanh toán": "Tap to view cart & check out",
    "0 món": "0 items",
    "Thêm vào giỏ": "Add to cart",
    "Hình thức nhận món": "How you'll get your order",
    "Giao hàng": "Delivery",
    "Pick up tại tiệm": "Pickup at the shop",
    "Giờ lấy (giờ bạn ghé lấy món)": "Pickup time (when you'll come)",
    "Địa chỉ giao hàng": "Delivery address",
    "Số nhà, đường, thành phố": "Street address, city",
    "Thông tin đặt hàng": "Order details",
    "Kiểm tra món rồi điền thông tin để đặt hàng": "Review your items, then fill in your details to order",
    "Thông tin của bạn": "Your information",
    "Tên của bạn": "Your name",
    "Số điện thoại": "Phone number",
    "Ghi chú (không bắt buộc)": "Note (optional)",
    "Thanh toán": "Payment",
    "💳 Thanh toán & Đặt hàng": "💳 Payment & Place Order",
    "💳 Thanh toán bằng thẻ / Apple Pay / Google Pay": "💳 Pay by card / Apple Pay / Google Pay",
    "Thanh toán an toàn qua Stripe": "Secure payment via Stripe",
    "Đặt hàng": "Place order",
    "Phí giao hàng": "Delivery fee",
    "Thuế 8.75%": "Tax 8.75%",
    "Tổng cộng": "Total",
    "Quay lại giỏ hàng": "Back to cart",
    "Quay lại menu": "Back to menu",
    "Thử gửi lại": "Try sending again",
    "Thử thanh toán lại": "Try paying again",
    "Đặt thêm đơn mới": "Place another order",
    "Xoá món này": "Remove this item",
    "Trong giỏ: ": "In cart: ",
    "Giỏ đang trống.": "Your cart is empty.",
    "Đóng giỏ rồi chọn kem ngon nhé!": "Close the cart and pick some tasty ice cream!",
    "Đóng giỏ rồi chọn món ngon nhé!": "Close the cart and pick some tasty dishes!",
    "Gọi hotline 626-283-9994": "Call the hotline 626-283-9994",
    "Vui lòng gọi ": "Please call ",
    "Số lượng": "Quantity",
    "Tăng": "Increase",
    "Giảm": "Decrease",
    "Ngày: ": "Date: ",
    "Đã qua giờ nhận đơn": "Ordering is closed for this slot",
    "Đang tính phí giao…": "Calculating delivery fee…",
    "🚗 Phí giao tính theo quãng đường lái xe từ tiệm: $1/dặm, làm tròn lên (tối thiểu $1). Nếu chưa tính được phí, tiệm sẽ gọi lại xác nhận — bạn vẫn đặt hàng bình thường nhé.": "🚗 The delivery fee is based on driving distance from the shop: $1/mile, rounded up (minimum $1). If the fee can't be calculated, the shop will call to confirm — you can still place your order as usual.",
    "Vui lòng cho tiệm biết tên của bạn.": "Please let the shop know your name.",
    "Vui lòng nhập số điện thoại hợp lệ để tiệm gọi xác nhận.": "Please enter a valid phone number so the shop can call to confirm.",
    "Vui lòng nhập địa chỉ giao hàng.": "Please enter your delivery address.",
    "Ví dụ: Chị Lan": "E.g. Lan",
    "Ví dụ: 714-555-1234": "E.g. 714-555-1234",
    "Ví dụ: ít cay, thêm ớt, gọi trước khi giao…": "E.g. less spicy, extra chili, call before delivering…",
    "Ví dụ: giao giờ chiều, gọi trước khi giao…": "E.g. deliver in the afternoon, call before delivering…",
    "Ví dụ: 12 giờ trưa, 5:30 chiều…": "E.g. 12 noon, 5:30 PM…",

    /* ----- dat-com riêng ----- */
    "Think's Kitchen — Đặt Cơm Online": "Think's Kitchen — Order Food Online",
    "Chọn ngày đặt cơm": "Choose your order day",
    "Chọn ngày": "Choose a day",
    "Cơm phần — $10": "Set meal — $10",
    "CƠM PHẦN": "SET MEALS",
    "Cơm phần": "Set meal",
    "Chọn món cơm phần": "Choose your set-meal dishes",
    "Chọn 1 món mặn · 1 món xào · 1 món canh": "Pick 1 main · 1 stir-fry · 1 soup",
    "MÓN MÌ / NUI & ĐẶC BIỆT": "NOODLES & SPECIALS",
    "MÓN THÊM": "EXTRAS",
    "🍽 Món thêm của tiệm": "🍽 Shop extras",
    "Các món trong ngày gọi lẻ: phần nhỏ $5 · phần lớn $10.": "Today's dishes à la carte: small portion $5 · large portion $10.",
    "+ Nhỏ ": "+ Small ",
    "+ Nhỏ": "+ Small",
    "+ Lớn": "+ Large",
    "Món mặn": "Main dish",
    "Món xào": "Stir-fry",
    "Món canh": "Soup",
    "Phần nhỏ": "Small portion",
    "Phần lớn": "Large portion",
    "Đã chốt": "Closed",
    "Giao hàng 2 ca: Sáng 9–11am": "Delivery in 2 shifts: Morning 9–11am",
    "Đang vào trang chính…": "Taking you to the main page…",
    "VD: Phở Ngon Bolsa": "E.g. Pho Ngon Bolsa",
    "VD: Nguyễn Văn A": "E.g. Nguyen Van A",
    "VD: cơm phần, phở, bánh mì, chè…": "E.g. set meals, pho, banh mi, desserts…",
    "Thông tin thêm về tiệm (không bắt buộc)": "More about your shop (optional)",
    "Lấy cơm": "With rice",
    "Không lấy cơm": "No rice",
    "Không lấy": "None",
    "Sáng 9–11am": "Morning 9–11am",
    "Tối 7–9pm": "Evening 7–9pm",
    "⏰ Ca Sáng 9–11am: chốt đơn 10:00 tối hôm trước · Ca Tối 7–9pm: chốt đơn 4:00 chiều cùng ngày.": "⏰ Morning shift 9–11am: orders close 10:00 PM the night before · Evening shift 7–9pm: orders close 4:00 PM the same day.",
    "🏠 Hệ Thống Các Tiệm": "🏠 Our Shops",
    "Đơn của tôi": "My orders",
    "Đăng nhập để xem lại đơn đã đặt & đặt hàng nhanh hơn": "Log in to see your past orders & check out faster",
    "Có tài khoản? Đăng nhập để xem lại đơn đã đặt": "Have an account? Log in to see your past orders",
    "Không có tài khoản vẫn đặt hàng bình thường — đăng nhập chỉ để xem lại lịch sử đơn.": "You can order without an account — logging in only lets you see your order history.",
    "Đăng nhập hoặc đăng ký": "Log in or sign up",
    "Đăng nhập tài khoản": "Log in to your account",
    "Đăng ký": "Sign up",
    "Chưa có tài khoản? Bấm tab Đăng ký ở trên để tạo mới.": "No account yet? Tap the Sign up tab above to create one.",
    "Quên mật khẩu?": "Forgot password?",
    "Gửi link đặt lại mật khẩu": "Send password reset link",
    "Đặt mật khẩu mới": "Set a new password",
    "Nhập mật khẩu mới cho tài khoản của bạn": "Enter a new password for your account",
    "Mật khẩu": "Password",
    "Mật khẩu mới": "New password",
    "Nhập lại mật khẩu mới": "Re-enter new password",
    "Lưu mật khẩu mới": "Save new password",
    "Ít nhất 6 ký tự": "At least 6 characters",
    "Mật khẩu cần ít nhất 6 ký tự.": "Password must be at least 6 characters.",
    "Mật khẩu nhập lại chưa khớp.": "The re-entered password doesn't match.",
    "Email chưa đúng định dạng.": "That email format doesn't look right.",
    "← Quay lại đăng nhập": "← Back to log in",

    /* ----- dat-kem riêng ----- */
    "ACE CREAMERY — Đặt Kem Online": "ACE CREAMERY — Order Ice Cream Online",
    "Kem ngon mỗi ngày 🍦": "Tasty ice cream, every day 🍦",
    "COMBO TIẾT KIỆM": "SAVINGS COMBO",
    "LY LẺ — $2/LY": "SINGLE CUPS — $2/CUP",
    "🍦 Combo 18 ly": "🍦 18-cup combo",
    "Mix sẵn của tiệm": "Shop's premixed combo",
    "Tự chọn vị": "Pick your own flavors",
    "Mix sẵn (mỗi vị 2 ly, Vanilla 1, Sesame 1)": "Premixed (2 cups of each flavor, Vanilla 1, Sesame 1)",
    "Mua lẻ từng ly, chọn vị tuỳ thích — mỗi ly $2.": "Buy single cups and pick any flavors — $2 per cup.",
    "🎉 Khai trương": "🎉 Grand opening",

    /* ----- tiem riêng ----- */
    "Tasty Express — Đặt Món Online": "Tasty Express — Order Food Online",
    "Đặt món online 🍽": "Order food online 🍽",
    "Đặt món online từ các tiệm trên nền tảng Tasty Express.": "Order food online from shops on the Tasty Express platform.",
    "Trên nền tảng Tasty Express": "On the Tasty Express platform",
    "THỰC ĐƠN": "MENU",
    "← Tất cả các tiệm": "← All shops",
    "← Xem tất cả các tiệm": "← See all shops",
    "Đang tải thông tin tiệm…": "Loading shop info…",
    "Đang tải thực đơn…": "Loading menu…",
    "Đang tải…": "Loading…",
    "Đang tải dữ liệu…": "Loading data…",

    /* ----- dang-ky-tiem ----- */
    "🏪 Đăng Ký Bán Trên Tasty Express": "🏪 Sell on Tasty Express",
    "Đăng Ký Bán Trên Tasty Express": "Sell on Tasty Express",
    "Điền thông tin tiệm của bạn bên dưới. Sau khi được duyệt, tiệm sẽ có": "Fill in your shop's details below. Once approved, your shop will get",
    "trang bán riêng": "its own selling page",
    "trên Tasty Express và": "on Tasty Express and",
    "hệ thống quản lý đơn riêng": "its own order-management system",
    "— đơn của khách đặt món tiệm bạn sẽ chạy thẳng về hệ thống của tiệm để tiệm tự quản lý.": "— customer orders for your dishes go straight into your shop's system for you to manage.",
    "Phí nền tảng:": "Platform fee:",
    "% trên mỗi đơn bán được — chỉ thu khi có đơn.": "% per completed order — charged only when you make a sale.",
    "Tên tiệm": "Shop name",
    "Tên chủ tiệm": "Owner name",
    "Địa chỉ tiệm": "Shop address",
    "Loại món ăn": "Type of food",
    "Ghi chú": "Note",
    "Gửi đăng ký": "Submit registration",
    "✅ Đã gửi đăng ký thành công!": "✅ Registration submitted!",
    "Cảm ơn bạn. Tasty Express sẽ liên hệ lại với tiệm sớm để hoàn tất việc duyệt và mở trang bán riêng cho tiệm.": "Thank you. Tasty Express will contact your shop soon to complete approval and open your shop's own selling page.",
    "Thông tin chỉ dùng để Tasty Express liên hệ duyệt tiệm. Cần hỗ trợ gọi: 626-283-9994.": "This information is only used by Tasty Express to review your shop. For help, call: 626-283-9994.",

    /* ----- doi-tac / quan-ly (đối tác) ----- */
    "🏪 Back Office — Tiệm Đối Tác": "🏪 Back Office — Partner Shop",
    "Tiệm của bạn": "Your shop",
    "Trang quản lý dành cho": "Management page for",
    "tiệm đối tác đã được Tasty Express duyệt": "a Tasty Express–approved partner shop",
    "Kết nối Stripe": "Connect Stripe",
    "Chưa kết nối — bấm để liên kết ngân hàng, nhận tiền tự động": "Not connected — tap to link your bank and get paid automatically",
    "Quản lý món": "Dish manager",
    "Tự đăng món bán trên trang của tiệm": "Post dishes to sell on your shop's page",
    "💰 Tổng tiền": "💰 Money totals",
    "🚗 Tổng tiền": "🚗 Trip money",
    "🚗 Tổng chuyến đi": "🚗 Trip totals",
    "🧮 Tổng món cần chuẩn bị": "🧮 Total dishes to prepare",
    "🍳 Tổng món cần nấu": "🍳 Total dishes to cook",
    "Tiến độ nấu order": "Order cooking progress",
    "Cần thu khi giao": "To collect on delivery",
    "Đã thanh toán": "Paid",
    "Chưa thanh toán": "Not paid",
    "Dừng giao hàng": "Delivery stops",
    "Số điểm giao": "Number of stops",
    "Thời gian lái xe": "Driving time",
    "Tổng quãng đường": "Total distance",
    "Tổng thời gian chuyến": "Total trip time",
    "Tổng tiền chuyến": "Total trip money",
    "🗺 Chỉ đường": "🗺 Directions",
    "↩ Hoàn tác": "↩ Undo",
    "✓ ĐÃ GIAO": "✓ DELIVERED",
    "Tìm order theo 4 số cuối số điện thoại": "Search orders by the last 4 phone digits",
    "Tìm theo 4 số cuối…": "Search by last 4 digits…",
    "Khách": "Customer",
    "Tạo tài khoản": "Create account",
    "Dùng email thật của tiệm — khi quên mật khẩu, link đặt lại sẽ gửi về email này.": "Use your shop's real email — if you forget your password, the reset link is sent to this email.",
    "Tài khoản chưa gắn với tiệm đã được duyệt. Vui lòng liên hệ Tasty Express.": "This account isn't linked to an approved shop. Please contact Tasty Express.",
    "Chưa có tiệm trên Tasty Express?": "No shop on Tasty Express yet?",
    "Đăng ký bán tại đây": "Register to sell here",
    "— sau khi được duyệt, dùng đúng email đã đăng ký để tạo tài khoản ở trang này.": "— once approved, use the exact email you registered with to create an account on this page.",
    "🔑 Đặt mật khẩu mới": "🔑 Set a new password",
    "Nhập mật khẩu mới cho tài khoản tiệm của bạn.": "Enter a new password for your shop account.",
    "Trang Quản Lý": "Management",
    "📊 Quản Lý Tasty Express": "📊 Tasty Express Management",
    "Quản Lý Tasty Express": "Tasty Express Management",
    "Trang quản lý dành cho chủ nền tảng: xem các tiệm bán, duyệt đơn đăng ký và lợi nhuận của app. Đăng nhập bằng tài khoản app của tiệm (app@creameryace.com).": "Management page for the platform owner: view selling shops, review registrations and app profit. Log in with the shop's app account (app@creameryace.com).",
    "🍽️ Các tiệm đang bán": "🍽️ Shops currently selling",
    "🏪 Đơn đăng ký bán": "🏪 Selling registrations",
    "💵 Tiền lời đồ ăn (nhập tay)": "💵 Food profit (manual entry)",
    "💸 Commission": "💸 Commission",
    "🧾 Đơn online gần nhất": "🧾 Recent online orders",
    "Chờ duyệt": "Pending approval",
    "Đã duyệt": "Approved",
    "Đã từ chối": "Rejected",
    "Đang bán": "Selling",
    "✓ Duyệt tiệm": "✓ Approve shop",
    "Từ chối": "Reject",
    "Lưu %": "Save %",
    "Lưu mức chung": "Save general rate",
    "＋ Thêm tiền lời": "＋ Add profit entry",
    "Chưa có đơn online nào.": "No online orders yet.",
    "Chủ tiệm: ": "Owner: ",
    "Commission riêng:": "Custom commission:",
    "Khác": "Other",
    "Mặn:": "Main:",
    "Xào:": "Stir-fry:",
    "Canh:": "Soup:",
    "Chọn món cho cơm phần": "Choose dishes for your set meal",
    "/ phần": "/ portion",
    "Đặc biệt": "Special",
    "MENU ĐẶC TIỆC — ": "PARTY TRAY MENU — ",
    "1 tray dành cho 4–5 người · Đặt trước để tiệm chuẩn bị chu đáo": "1 tray serves 4–5 people · Please order ahead so the shop can prepare it well",
    "1 tray · 4–5 người": "1 tray · serves 4–5",
    "Gỏi": "Salads",
    "Món chiên": "Fried dishes",
    "Món khai vị": "Appetizers",
    "Xào bò": "Beef stir-fry",
    "Xào hải sản": "Seafood stir-fry",
    "Cơm tháng": "Monthly meal plan",
    "Bánh canh giò heo, trứng cút, tôm": "Pork hock noodle soup with quail eggs & shrimp",
    "Bánh tráng trộn": "Mixed rice paper salad",
    "Bò kho": "Beef stew",
    "Bò xào cà chua củ hành": "Beef stir-fried with tomato & onion",
    "Bông cải xào": "Stir-fried cauliflower",
    "Bún bò Huế": "Hue-style beef noodle soup",
    "Bún riêu": "Crab noodle soup",
    "Bắp cải xào": "Stir-fried cabbage",
    "Canh bí đỏ": "Pumpkin soup",
    "Canh bầu nấu tôm": "Gourd soup with shrimp",
    "Canh chua tôm": "Sour shrimp soup",
    "Canh cà rốt, khoai tây": "Carrot & potato soup",
    "Canh cải bẹ xanh": "Mustard greens soup",
    "Canh cải chua sườn non": "Pickled mustard soup with pork ribs",
    "Canh cải thảo": "Napa cabbage soup",
    "Canh hẹ đậu hủ": "Chive & tofu soup",
    "Canh khoai mỡ": "Purple yam soup",
    "Canh khổ qua dồi thịt": "Stuffed bitter melon soup",
    "Canh mồng tơi mướp": "Malabar spinach & luffa soup",
    "Canh rau dền": "Amaranth greens soup",
    "Cháo lòng": "Pork offal congee",
    "Chả giò": "Fried spring rolls",
    "Cà ri gà": "Chicken curry",
    "Cá chim, cá lưỡi trâu chiên": "Fried pomfret & sole",
    "Cá kho tộ": "Clay-pot braised fish",
    "Cá kèo kho rau răm": "Braised goby with Vietnamese coriander",
    "Cá ngừ kho thơm": "Tuna braised with pineapple",
    "Cá nục chiên": "Fried mackerel scad",
    "Cá nục kho thơm": "Mackerel scad braised with pineapple",
    "Cánh gà chiên nước mắm": "Fish-sauce fried chicken wings",
    "Cánh gà, đùi gà chiên nước mắm": "Fish-sauce fried chicken wings & drumsticks",
    "Đùi gà, cánh gà chiên nước mắm": "Fish-sauce fried chicken drumsticks & wings",
    "Đùi gà, cánh gà chiên nước mắm tỏi": "Garlic fish-sauce fried chicken drumsticks & wings",
    "Cơm chiên Dương Châu": "Yangzhou fried rice",
    "Cơm chiên hải sản": "Seafood fried rice",
    "Cơm chiên tỏi trứng": "Garlic & egg fried rice",
    "Cải ngọt xào": "Stir-fried choy sum",
    "Giá hẹ xào": "Stir-fried bean sprouts & chives",
    "Gà kho gừng": "Ginger braised chicken",
    "Gà kho sả": "Lemongrass braised chicken",
    "Gà rô ti": "Roasted chicken",
    "Gỏi bò ngũ sắc": "Five-color beef salad",
    "Gỏi cuốn tôm thịt": "Fresh spring rolls with shrimp & pork",
    "Gỏi củ cải, cà rốt tôm thịt": "Radish & carrot salad with shrimp & pork",
    "Gỏi gà": "Chicken salad",
    "Gỏi đu đủ tôm thịt": "Papaya salad with shrimp & pork",
    "Kho quẹt chấm rau luộc": "Caramelized dipping sauce with boiled vegetables",
    "Khổ qua xào trứng": "Bitter melon stir-fried with egg",
    "Mì xào bò": "Beef chow mein",
    "Mì xào hải sản": "Seafood chow mein",
    "Nui xào bò": "Beef macaroni stir-fry",
    "Nui xào hải sản": "Seafood macaroni stir-fry",
    "Nui giò heo, trứng cút, tôm": "Macaroni soup with pork hock, quail eggs & shrimp",
    "Mắm chưng": "Steamed fermented fish with egg & pork",
    "Mực lăn bột chiên giòn": "Crispy fried calamari",
    "Mực lăn bột": "Crispy fried calamari",
    "Mực xào chua ngọt": "Sweet & sour squid stir-fry",
    "Su su xào": "Stir-fried chayote",
    "Sườn kho tiêu": "Pepper braised pork ribs",
    "Sườn non nướng": "Grilled pork ribs",
    "Sườn non xào chua ngọt": "Sweet & sour pork ribs",
    "Thịt ba rọi kho mắm ruốc": "Pork belly braised in shrimp paste",
    "Thịt kho trứng": "Braised pork with eggs",
    "Trứng chiên thịt bằm": "Fried egg with minced pork",
    "Tôm kho tàu": "Caramelized shrimp",
    "Tôm lăn bột chiên giòn": "Crispy fried shrimp",
    "Tôm lăn bột": "Crispy fried shrimp",
    "Tôm rim": "Caramelized shrimp",
    "Tôm rim thịt ba rọi": "Caramelized shrimp with pork belly",
    "Đậu hủ dồi thịt sốt cà chua": "Stuffed tofu in tomato sauce",
    "Đậu que xào": "Stir-fried green beans"
  };

  var WD = { "Thứ 2": "Monday", "Thứ 3": "Tuesday", "Thứ 4": "Wednesday", "Thứ 5": "Thursday", "Thứ 6": "Friday", "Thứ 7": "Saturday", "Chủ Nhật": "Sunday" };
  var RULES = [
    [/^⏰ Ca Sáng của (Thứ \d|Chủ Nhật) ([\d/]+) đã chốt đơn \(10:00 tối hôm trước\) — ngày này chỉ còn nhận đơn cho Ca Tối 7–9pm\.$/,
      function (m, wd, dm) { return "⏰ The Morning shift for " + (WD[wd] || wd) + " " + dm + " is closed (10:00 PM the night before) — this day now only takes Evening 7–9pm orders."; }],
    [/^⛔ (Thứ \d|Chủ Nhật) ([\d/]+) đã qua giờ nhận đơn — cả 2 ca đều đã chốt \(Ca Sáng chốt 10:00 tối hôm trước · Ca Tối chốt 4:00 chiều cùng ngày\)\. Bạn chọn ngày khác giúp tiệm nhé\.$/,
      function (m, wd, dm) { return "⛔ " + (WD[wd] || wd) + " " + dm + " is past the order cutoff — both shifts are closed (Morning closes 10:00 PM the night before · Evening closes 4:00 PM the same day). Please pick another day."; }],
    [/^Một phần gồm cơm trắng kèm 1 món mặn, 1 món xào và 1 món canh — bạn tự chọn theo menu (Thứ \d|Chủ Nhật) ([\d/]+)\.$/,
      function (m, wd, dm) { return "One portion of white rice with your choice of 1 main, 1 stir-fry and 1 soup — from the " + (WD[wd] || wd) + " " + dm + " menu."; }],
    [/^Món đặc biệt (Thứ \d|Chủ Nhật)$/, function (m, wd) { return "Special · " + (WD[wd] || wd); }],
    [/^(Thứ Hai|Thứ 2)\b/, "Monday"],
    [/^(Thứ Ba|Thứ 3)\b/, "Tuesday"],
    [/^(Thứ Tư|Thứ 4)\b/, "Wednesday"],
    [/^(Thứ Năm|Thứ 5)\b/, "Thursday"],
    [/^(Thứ Sáu|Thứ 6)\b/, "Friday"],
    [/^(Thứ Bảy|Thứ 7)\b/, "Saturday"],
    [/^Chủ Nhật\b/, "Sunday"],
    [/^Trong giỏ: (.+?) combo$/, "In cart: $1 combo(s)"],
    [/^Trong giỏ: (.+?) ly$/, "In cart: $1 cup(s)"],
    [/^Trong giỏ: (.+?) phần$/, "In cart: $1 portion(s)"],
    [/^Trong giỏ: /, "In cart: "],
    [/Nhỏ × (\d+)/g, "Small × $1"],
    [/Lớn × (\d+)/g, "Large × $1"],
    [/^Tổng: /, "Total: "],
    [/^SĐT: /, "Phone: "],
    [/^Địa chỉ: /, "Address: "],
    [/^Loại món: /, "Cuisine: "],
    [/^Mức commission chung: /, "General commission rate: "],
    [/^Không tìm thấy tiệm nào khớp với “/, "No shop matches “"],
    [/^(\d+) phút$/, "$1 min"],
    [/^(\d+) giờ$/, "$1 hr"]
  ];

  var PREFIX = { "Mặn: ": "Main: ", "Xào: ": "Stir-fry: ", "Canh: ": "Soup: ", "Cơm: ": "Rice: " };
  function trSegment(seg) {
    if (Object.prototype.hasOwnProperty.call(DICT, seg)) return DICT[seg];
    for (var p in PREFIX) {
      if (seg.indexOf(p) === 0) {
        var rest = seg.slice(p.length);
        if (Object.prototype.hasOwnProperty.call(DICT, rest)) return PREFIX[p] + DICT[rest];
      }
    }
    return seg;
  }
  function trText(node) {
    var raw = node.nodeValue;
    if (!raw || !/\S/.test(raw)) return;
    var core = raw.trim();
    var out;
    if (Object.prototype.hasOwnProperty.call(DICT, core)) {
      out = DICT[core];
    } else if (core.indexOf(" · ") > -1) {
      var parts = core.split(" · ");
      var changed = false;
      for (var i = 0; i < parts.length; i++) {
        var t = trSegment(parts[i]);
        if (t !== parts[i]) changed = true;
        parts[i] = t;
      }
      out = changed ? parts.join(" · ") : core;
      if (!changed) for (var j = 0; j < RULES.length; j++) out = out.replace(RULES[j][0], RULES[j][1]);
    } else {
      out = trSegment(core);
      if (out === core) for (var k = 0; k < RULES.length; k++) out = out.replace(RULES[k][0], RULES[k][1]);
    }
    if (out !== core) node.nodeValue = raw.replace(core, out);
  }

  function walk(root) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) trText(nodes[i]);
    if (root.querySelectorAll) {
      var els = root.querySelectorAll("[placeholder]");
      for (var j = 0; j < els.length; j++) {
        var ph = els[j].getAttribute("placeholder");
        if (ph && DICT[ph]) els[j].setAttribute("placeholder", DICT[ph]);
      }
    }
  }

  function start() {
    walk(document.body);
    var mo = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === "characterData") { trText(m.target); continue; }
        for (var j = 0; j < m.addedNodes.length; j++) {
          var a = m.addedNodes[j];
          if (a.nodeType === 1) walk(a);
          else if (a.nodeType === 3) trText(a);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
