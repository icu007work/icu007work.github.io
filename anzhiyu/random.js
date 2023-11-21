var posts=["archives/82958ed6.html","archives/40fd71e7.html","archives/5d597b5d.html","archives/ee2c1e7d.html","archives/419d96b2.html","archives/9e3ebe18.html","archives/dd2d9cfc.html","archives/4424cd46.html","archives/3323fdd0.html","archives/ad476873.html","archives/822ebc87.html","archives/1b27ed3d.html","archives/5a3281f7.html","archives/c33bd04d.html","archives/b43ce0db.html","archives/7a37a823.html","archives/b4cc4d5c.html","archives/2dc51ce6.html","archives/ef009d9b.html","archives/6b48db66.html","archives/5ac22c70.html","archives/55661a2d.html","archives/cc6f4b97.html","archives/22612abb.html","archives/bc05bf18.html","archives/5d36ff15.html","archives/9491d997.html","archives/add4ecd9.html","archives/5e339248.html","archives/b6be31da.html","archives/71255bbb.html","archives/2940757f.html","archives/80c83deb.html","archives/25e76629.html","archives/13767a3a.html","archives/7d2e59d3.html","archives/794bccc2.html","archives/735e5788.html","archives/51d15a97.html","archives/c521edc1.html","archives/55cbdc7c.html","archives/c81dbfc9.html","archives/eacc0609.html","archives/12ce6b69.html","archives/f5bc3448.html","archives/eea0cb26.html","archives/9765c01a.html","archives/3e55a450.html","archives/3b092706.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"我的主站","hundredSuffix":"","link":"https://icu007.work/","avatar":"https://icu007.work/wp-content/uploads/2022/03/head-1.jpeg","descr":"尊重所有声音 但成为自己","siteshot":"https://pic.ziyuan.wang/2023/08/16/a07276b3232ac.png"},{"name":"主站","hundredSuffix":"","link":"https://icu007.work","avatar":"https://icu007.work/wp-content/uploads/2022/03/head-1.jpeg","descr":"与君共赴 万里征程"},{"name":"副站","hundredSuffix":"","link":"https://icu007work.gitee.io","avatar":"https://icu007.work/wp-content/uploads/2022/03/head-1.jpeg","descr":"与君共赴 万里征程"},{"name":"副站","hundredSuffix":"","link":"https://hiheya.github.io/","avatar":"https://icu007.work/wp-content/uploads/2022/03/head-1.jpeg","descr":"与君共赴 万里征程"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };