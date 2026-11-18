# Ship menu in dat-com — build spec (Chris, Wed 2026-11-04 evening PT)

Status: Chris instructed, main agent acknowledged at 2026-11-05T03:08Z ("vào mục Ship đi xa là hiện bảng menu ship, tối đa 12 phần = 1 package, phí ship $14.99 — em làm ngay"). This spec pins the details so the build does not need to re-ask him.

## What Chris asked, in order
1. Shipping card button renamed "Gọi đặt ship" → "Đặt cơm online" — DONE in cac-tiem/index.html (button links to dat-com/).
2. Inside dat-com, choosing **Ship đi xa** must show the SHIP menu (not the weekly menu — Chris's screenshot showed the weekly menu with $5/$10 món lẻ, which is wrong for ship).
3. Customer picks dishes from that menu table; **maximum 12 phần per 1 package**.
4. Ship price **$14.99 per package, OVERNIGHT, CA / AZ / NV only**.

## Ship menu (verbatim from Chris's message, 2026-11-05T02:41Z)
Mặn — Nhỏ $5.5 / Lớn $10.5:
Thịt ba rọi kho quẹt · Thịt ba rọi mắm ruốc · Thịt kho trứng · Cá kho tộ (cá ba sa) · Cá nục kho thơm · Tôm rim ba rọi · Gà kho gừng · Gà kho sả · Cánh gà chiên sốt mắm tỏi · Đùi gà chiên sốt mắm tỏi · Cánh gà chiên nước mắm · Đùi gà chiên nước mắm · Mắm chưng

Canh — Nhỏ $5.5 / Lớn $10.5:
Canh chua · Canh khổ qua dồi thịt · Canh Gà nấu lá giang · Canh cải chua sườn non · Canh cải bẹ xanh

Xào — Nhỏ $5.5 / Lớn $10.5:
Xu xu xào (Chris's spelling; weekly menu writes "Su su" — keep one spelling consistently) · Mực xào chua ngọt

Single-price:
Cơm chiên hải sản $12.5 · Cơm chiên dương châu $12.5 · Nui xào bò $10.5 · Nui xào hải sản $12.5 · Mì xào bò $10.5 · Mì xào hải sản $12.5

## Verified current state of dat-com/index.html (read 2026-11-05T03:1xZ)
- Line ~558: segShip button "Ship đi xa" exists; setMethod('ship') only toggles address zone — menu render is still the weekly menu for all methods.
- Line ~593: shipZone fee-note still says "phí ship cố định $18.49/đơn".
- Line ~866: `var SHIP_FEE = 18.49; // Chris chốt 2026-10-30`.
- buildOrder() (method==='ship') uses SHIP_FEE constant and appends "Phí ship $<SHIP_FEE>" to the order note; summary/success/history screens also read the constant — so changing the constant flows through, except the hard-coded fee-note text at line ~593.

## Build points
1. Add a static SHIP_MENU data set (above) and render it instead of the weekly menu when method==='ship' (sections Mặn/Canh/Xào with Nhỏ/Lớn size choice; single-price items plain). Hide day tabs / đặc tiệc in ship mode.
2. Portion counter in ship mode: "X/12 phần · 1 package". Count = total item qty. At 12, block further adds with a message like "1 package tối đa 12 phần ạ — mình bỏ bớt 1 món hoặc đặt thêm 1 đơn/package mới nhé". (Open micro-point, default chosen to match Chris's literal words: hard cap 12 for v1, 1 package per order. If Chris later wants auto package-2 at +$14.99, that is a small follow-up — do not invent it now.)
3. SHIP_FEE 18.49 → 14.99 and update its comment; rewrite the line-~593 fee-note: "🚚 Ship OVERNIGHT toàn CA, NV & AZ — $14.99/package (1 package tối đa 12 phần). Đặt trước 2PM hôm nay, nhận hàng trước 5PM ngày mai."
4. Nice-to-have matching Chris's flow: make the cac-tiem Shipping card's "Đặt cơm online" button deep-link into ship mode (e.g. dat-com/?ship=1 → setMethod('ship') on load), since he tapped that button expecting the ship menu.
5. Tax stays as-is (8.75% on subtotal + fee, per existing totals()).
6. Deploy per standing rules: bump the build token in version.json AND all 12 HTML pages in the same commit; after GitHub upload, verify each target folder/page actually landed (curl), not just version.json; then auto-send Chris the link (standing auto-send rule).
7. Memory/rule update for the main agent: $14.99/package SUPERSEDES the 2026-10-31 locked "flat $18.49 per ship order" rule for dat-com checkout. Staff-app Shipping section and GLS label flow are unchanged; ship orders still live only in Think's Kitchen Shipping, excluded from the kitchen 🌐 section.

## Acceptance check (no real Stripe order)
Open dat-com via the Shipping card → tap Ship đi xa → menu shows $5.5/$10.5 ship prices (not $5/$10) → add items to 12 OK, 13th blocked → totals show "Phí ship $14.99" → totals screen only; do not complete a paid test order without Chris.
