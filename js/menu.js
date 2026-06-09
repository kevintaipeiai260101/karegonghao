/* ==================================================
   KARE NODE SYSTEM
   menu.js
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");

    if (!menuToggle) return;

    const mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu";

    mobileMenu.innerHTML = `
        <button class="mobile-menu-close">&times;</button>

        <ul>
            <li><a href="index.html">首頁</a></li>
            <li><a href="worldview.html">世界觀</a></li>
            <li><a href="story.html">品牌故事</a></li>
            <li><a href="system.html">中轉系統</a></li>
            <li><a href="community.html">社區共好</a></li>
            <li><a href="partners.html">共好夥伴</a></li>
            <li><a href="order.html">訂餐</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">聯絡我們</a></li>
        </ul>
    `;

    document.body.appendChild(mobileMenu);

    const closeButton = mobileMenu.querySelector(".mobile-menu-close");
    const menuLinks = mobileMenu.querySelectorAll("a");

    function openMenu() {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    }

    menuToggle.addEventListener("click", openMenu);

    closeButton.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

});
