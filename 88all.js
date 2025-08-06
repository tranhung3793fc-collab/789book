(function() {
  // --- Tool 1: Tin nhắn hộp quà 1 ---
  function tool1() {
    (async () => {
      function w(t) {
        return new Promise(r => setTimeout(r, t));
      }

      async function s() {
        let e = document.querySelector(".el-select__wrapper");
        if (!e) return console.warn("❌ dropdown"), !1;
        if ("true" != e.getAttribute("aria-expanded")) {
          e.click();
          await w(200);
        }
        if ([...document.querySelectorAll(".el-select-dropdown__item")].find(t => {
            if ("礼盒型站内信" === t.textContent.trim()) {
              t.click();
              return !0;
            }
          })) return await w(100), !0;
        return console.warn("❌ mục"), !1;
      }

      function f(t, e, n = 0) {
        let r = document.querySelectorAll(t);
        if (r.length > n) {
          let o = r[n];
          o.value = e;
          ["input", "change"].forEach(ev => o.dispatchEvent(new Event(ev, {
            bubbles: !0
          })));
          o.dispatchEvent(new CompositionEvent("compositionend", {
            bubbles: !0
          }));
          o.focus();
          o.blur();
        }
      }
      if (await s()) {
        let t = document.querySelector(".ql-editor");
        if (!t) return console.warn("❌ .ql-editor");
        t.innerHTML = '<p>🌟 Hai Pemain <strong style="color: rgb(153, 51, 255);">88main</strong>!</p><p><br></p><p>🎉 Anda telah menerima hadiah eksklusif pemula kami, dan hadiah Anda dapat langsung digunakan untuk berpartisipasi dalam permainan, memberi Anda kesempatan untuk memenangkan lebih banyak hadiah besar 💰 . Jika tidak ikut, bagaimana Anda tahu apakah Anda beruntung?</p><p><br></p><p>📲 Ikuti Saluran Resmi Kami untuk Mendapatkan Info Promo Terbaru!</p><p><br></p><p>👉 Klik Ikuti:&nbsp; [<a href="https://whatsapp.com/channel/0029VbBMkET8KMqkB2pGhx39" rel="noopener noreferrer" target="_blank" style="color: rgb(102, 185, 102);"><strong>WhatsApp</strong></a>]</p><p><br></p><p>👉 Klik Ikuti:&nbsp; [<a href="https://t.me/MainResmi" rel="noopener noreferrer" target="_blank" style="color: rgb(102, 185, 102);"><strong>Telegram</strong></a>]</p>';
        f('input[placeholder="请输入邮件标题"]', "Bonus misterius!");
        f('input[placeholder="奖励下限"]', 177);
        f('input[placeholder="奖励上限"]', 277);
        const e = Array.from(document.querySelectorAll("span")).find(t => t.textContent.includes("金币(百分比)"));
        let n = null;
        if (e) {
          const t = e.nextElementSibling;
          t && t.classList.contains("el-input") && (n = t.querySelector('input.el-input__inner[type="number"]'));
        }
        if (n) {
          n.value = "100";
          n.dispatchEvent(new Event("input", {
            bubbles: !0
          }));
          n.dispatchEvent(new Event("change", {
            bubbles: !0
          }));
          console.log('✅ Đã điền "100" vào trường "金币(百分比):".');
        } else console.error('❌ Không tìm thấy trường nhập liệu cho "金币(百分比):".');
        const now = new Date();
        now.setMinutes(0, 0, 0);

        function formatDate(dt) {
          const y = dt.getFullYear();
          const m = String(dt.getMonth() + 1).padStart(2, "0");
          const d = String(dt.getDate()).padStart(2, "0");
          const h = String(dt.getHours()).padStart(2, "0");
          const min = String(dt.getMinutes()).padStart(2, "0");
          const s = String(dt.getSeconds()).padStart(2, "0");
          return `${y}-${m}-${d} ${h}:${min}:${s}`;
        }
        const startTime = now;
        const endTime = new Date(startTime.getTime() + 72 * 60 * 60 * 1000);

        function fillAndTrigger(selector, value) {
          const el = document.querySelector(selector);
          if (!el) {
            console.warn(`Không tìm thấy input: ${selector}`);
            return;
          }
          el.focus();
          el.value = value;
          ['input', 'change', 'blur', 'keyup'].forEach(evt => {
            el.dispatchEvent(new Event(evt, {
              bubbles: true
            }))
          });
          el.blur();
        }
        fillAndTrigger('input[placeholder="邮件开启时间"]', formatDate(startTime));
        fillAndTrigger('input[placeholder="邮件截止时间"]', formatDate(endTime));
        console.log("✅ Đã điền thời gian 邮件开启时间 và 邮件截止时间");
        const now2 = new Date();
        let hour = now2.getHours();
        const minutes = now2.getMinutes();
        if (minutes >= 30) {
          hour = (hour + 1) % 24;
        }
        const startHour = (hour === 0) ? 23 : hour - 1;
        const remarkText = `注册未充值${String(startHour).padStart(2,'0')}-${String(hour).padStart(2,'0')}点`;
        const remarkInput = document.querySelector('input[placeholder="备注"]');
        if (remarkInput) {
          remarkInput.focus();
          remarkInput.value = remarkText;
          ['input', 'change', 'blur', 'keyup'].forEach(evt => {
            remarkInput.dispatchEvent(new Event(evt, {
              bubbles: true
            }))
          });
          remarkInput.blur();
          console.log(`✅ Đã điền 备注: ${remarkText}`);
        } else {
          console.warn('❌ Không tìm thấy input placeholder="备注"');
        }
        console.log("✅ Hoàn tất nội dung");
      } else console.warn("⛔ Lỗi dropdown");
    })();
  }

  // --- Tool 2: Tin nhắn push ngẫu nhiên ---
  function tool2() {
    (async () => {
      function w(t) {
        return new Promise(r => setTimeout(r, t))
      }
      async function f(e, t) {
        e.focus();
        e.value = t;
        e.dispatchEvent(new Event("input", {
          bubbles: !0
        }));
        await w(10);
        e.dispatchEvent(new Event("change", {
          bubbles: !0
        }));
        await w(10);
        e.dispatchEvent(new Event("blur", {
          bubbles: !0
        }));
        e.dispatchEvent(new CompositionEvent("compositionend", {
          bubbles: !0
        }))
      }
      const o = [{
        title: "💰 Masuk Sekarang & Dapatkan Uang Tunai Gratis! 🎁",
        content: "🎉 Gabung 88Main hari ini dan klaim 💸 hadiah uang tunai langsung + promo isi ulang spesial! 🚀"
      }, {
        title: "🔥 Hadiah Instan Hanya Dengan 1 Klik! 💎",
        content: "🎁 Masuk sekarang ke 88Main dan terima 💵 bonus kejutan langsung ke akunmu!"
      }, {
        title: "🎯 Bonus Tunai VIP Menunggumu di 88Main! 💰",
        content: "💸 Login sekarang & nikmati 💎 hadiah spesial + cashback eksklusif untuk member aktif!"
      }, {
        title: "🎊 Rejeki Nomplok Hari Ini di 88Main! 🤑",
        content: "🚀 Masuk dan klaim 🎁 uang tunai gratis + promo gila yang cuma muncul hari ini!"
      }, {
        title: "💸 Isi Ulang Sekarang, Bonus Hingga 100%! 🔥",
        content: "🎁 Hanya di 88Main: Cashback + bonus isi ulang ganda untuk pengguna setia!"
      }, {
        title: "🎁 Hadiah Tunai Siap Diklaim Sekarang! 💵",
        content: "🎯 Klaim sekarang dan dapatkan 💰 hadiah tanpa syarat – hanya di 88Main!"
      }, {
        title: "🚀 Peluang Emas! Bonus VIP Menantimu! 👑",
        content: "💥 Dapatkan 💸 hadiah eksklusif + akses event spesial hanya di 88Main hari này!"
      }, {
        title: "🤑 88Main Bagi-bagi Uang Tunai Gratis! 🎉",
        content: "🎁 Login dan nikmati bonus langsung tanpa undian – semua bisa menang!"
      }, {
        title: "🎯 Hadiah Terbesar Minggu Ini Ada di 88Main! 💰",
        content: "💎 Jangan sampai ketinggalan – login sekarang & klaim bonus misteri!"
      }, {
        title: "🎁 Isi Ulang Hari Ini, Bonus Lebih Banyak! 🔥",
        content: "💸 Promo terbatas: Dapatkan ekstra 100% isi ulang + kejutan menarik!"
      }, {
        title: "💥 Masuk 88Main & Dapatkan Hadiah Kilat! ⚡",
        content: "🎊 Hadiah misteri akan muncul dalam 1 klik – buruan sebelum habis!"
      }, {
        title: "🎉 Bonus Loyalti Khusus Member Aktif! 👑",
        content: "💵 Login rutin dan kumpulkan 💰 poin untuk ditukar hadiah nyata!"
      }, {
        title: "🔥 Hadiah VIP Telah Aktif – Klaim Sekarang! 💎",
        content: "🎁 Eksklusif hari này: Bonus tunai + isi ulang spesial hanya di 88Main!"
      }, {
        title: "🎊 Hanya Hari Ini: Bonus Ganda Untukmu! 💸",
        content: "🤑 Gabung sekarang dan nikmati 💰 cashback + kupon hadiah langsung!"
      }, {
        title: "🚀 88Main Siapkan Kejutan Untukmu Hari Ini! 🎁",
        content: "💥 Hadiah langsung + akses VIP tanpa syarat menantimu!"
      }, {
        title: "💵 Bonus Uang Tunai Telah Masuk! Cek Akunmu! 📲",
        content: "🎉 Masuk sekarang & lihat langsung 💰 saldo bonusmu di 88Main!"
      }, {
        title: "🎯 Cashback & Hadiah VIP Telah Diaktifkan! 💥",
        content: "💸 Gabung hôm nay và klaim semua benefit VIP hanya di 88Main!"
      }, {
        title: "🎁 Klaim Hadiah Eksklusif Sekarang! 🏆",
        content: "🎊 Cuma hari này: 🎁 hadiah langsung + event terbatas untukmu di 88Main!"
      }, {
        title: "💰 Login Harian & Dapatkan Uang Tunai Gratis! 🔥",
        content: "🤑 Tidak perlu deposit! Bonus hadir setiap hari di 88Main!"
      }, {
        title: "🔥 Promo Spesial Hari Ini – Bonus Tanpa Batas! 💵",
        content: "🎁 Buka 88Main dan aktifkan 💸 hadiah VIP + kupon misteri!"
      }, {
        title: "🎉 88Main Buka Kesempatan Menang Besar! 🎯",
        content: "🚀 Hadiah besar & promo tak terduga siap untukmu! Login sekarang!"
      }, {
        title: "💥 Dapatkan Hadiah Kilat dari 88Main! 🎁",
        content: "🎊 Isi ulang sekarang dan raih 💰 bonus instan + cashback premium!"
      }, {
        title: "🎯 Hanya Member Aktif Bisa Klaim Hadiah Ini! 💸",
        content: "👑 Login sekarang ke 88Main & buka hadiah spesial yang tersembunyi!"
      }, {
        title: "💎 Hadiah Eksklusif VIP Telah Tersedia! 🔥",
        content: "🎁 Masuk & klaim uang tunai + diskon besar hanya untukmu di 88Main!"
      }, {
        title: "🤑 Bonus Tak Terbatas Siap Diklaim Hari Ini! 🎊",
        content: "🚀 Kesempatan menang besar setiap hari di 88Main – login sekarang!"
      }, {
        title: "🎁 Isi Ulang 1x, Terima Bonus 2x! 💵",
        content: "🎉 Promo unik dari 88Main hanya hari này – dapatkan bonus ganda!"
      }, {
        title: "🔥 Cek Akunmu Sekarang: Bonus Sudah Masuk! 📲",
        content: "💸 Uang tunai gratis tersedia untuk diklaim segera – đừng tunda!"
      }, {
        title: "🎯 Bonus & Hadiah Baru Sudah Tersedia! 💥",
        content: "💎 Chỉ dành cho thành viên tích cực trên 88Main – hãy kiểm tra tài khoản của bạn ngay bây giờ!"
      }, {
        title: "🎁 Kupon Rahasia Menunggumu! 🤑",
        content: "🚀 Masuk sekarang & buka kotak kejutan berisi 💰 hadiah tunai!"
      }, {
        title: "💵 Gratis Uang Tunai Setiap Hari di 88Main! 🎉",
        content: "🎊 Tak perlu undian, semua pengguna berhak mendapatkan hadiah harian!"
      }];
      const s = o[Math.floor(Math.random() * o.length)],
        timeInput = document.querySelector('input[placeholder="请选择发送时间"]');
      if (timeInput) {
        const n = new Date;
        n.setMinutes(n.getMinutes() + 3);
        const e = n.getFullYear(),
          t = String(n.getMonth() + 1).padStart(2, "0"),
          r = String(n.getDate()).padStart(2, "0"),
          a = String(n.getHours()).padStart(2, "0"),
          c = String(n.getMinutes()).padStart(2, "0"),
          i = String(n.getSeconds()).padStart(2, "0"),
          l = `${e}-${t}-${r} ${a}:${c}:${i}`;
        timeInput.click();
        await w(100);
        await f(timeInput, l);
        await w(300);
        console.log(`✅ Waktu telah diisi: ${l}`)
      } else console.warn("❌ Tidak dapat menemukan input waktu (placeholder: \"请选择发送时间\").");
      const d = Array.from(document.querySelectorAll(".el-select__wrapper")).find(e => e.closest(".el-select") && e.closest(".el-form-item__content"));
      if (!d) return void console.warn("❌ Tidak dapat menemukan dropdown.");
      "true" !== d.getAttribute("aria-expanded") && (d.click(), await w(300));
      const u = Array.from(document.querySelectorAll(".el-select-dropdown__item")).find(e => "特定用户" === e.textContent.trim());
      if (u) {
        u.click();
        console.log("✅ Berhasil memilih \"特定用户\".");
        await w(300)
      } else return void console.warn("❌ Tidak dapat menemukan item \"特定用户\" di dropdown.");
      const m = document.querySelector('input[placeholder="请输入推送标题"]');
      m ? await f(m, s.title) : console.warn("❌ Tidak dapat menemukan input judul.");
      const h = document.querySelector('textarea[placeholder="请输入推送内容"]');
      h ? await f(h, s.content) : console.warn("❌ Tidak dapat menemukan textarea konten.")
    })()
  }

  // --- Tool 3: SMS động & Cấu hình ---
  function tool3() {
    // Function to prompt for input and store it
    function getDynamicInput(message, key) {
      let storedValue = localStorage.getItem(key);
      let input = null;

      if (storedValue) {
        const useStored = confirm(`${message}\n\nPrevious input was: "${storedValue}". Do you want to use this again? Click Cancel to enter new data.`);
        if (useStored) {
          input = storedValue;
        }
      }

      if (input === null) {
        input = prompt(`${message}\n\nPlease enter new data:`);
        if (input !== null) {
          localStorage.setItem(key, input);
        }
      }
      return input;
    }

    // Helper function for dropdown selection
    function selectDropdownOption(inputSelector, optionText, delay = 50) {
      const inputElement = document.querySelector(inputSelector);
      if (inputElement) {
        inputElement.click();
        setTimeout(() => {
          const options = document.querySelectorAll('.el-select-dropdown__item span');
          for (const option of options) {
            if (option.textContent.includes(optionText)) {
              option.click();
              break;
            }
          }
        }, delay);
      }
    }

    // Action 1: Click on tab-3
    document.getElementById('tab-3').click();

    // Action 2: Adjust the input value within the div to 50
    setTimeout(() => {
      const inputElement = document.querySelector('#app > div.layout > div.container > section > div.content > section > div.send > div.tabs-content > div > div.ordinary-inner > div.form-group.marginT24 > form > div:nth-child(5) > div:nth-child(4) > div.el-input-number > div input.el-input__inner');
      if (inputElement) {
        const nativeInputSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeInputSetter.call(inputElement, '30');
        inputElement.dispatchEvent(new Event('input', {
          bubbles: true
        }));
        inputElement.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }, 20);

    // Action 3: Fill content into textarea
    setTimeout(() => {
      const textarea = document.querySelector('#app > div.layout > div.container > section > div.content > section > div.send > div.tabs-content > div > div.ordinary-inner > div.form-group.marginT24 > form > div:nth-child(4) > div:nth-child(5) > div.form-control.el-textarea textarea.el-textarea__inner');
      if (textarea) {
        const value = 'delapan delapan Main punya hadiah spesial untuk Anda! Masuk sekarang untuk memenangkan hadiah menarik! Kunjungi sekarang: delapan delapan main dot com';
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
        nativeSetter.call(textarea, value);
        textarea.dispatchEvent(new Event('input', {
          bubbles: true
        }));
      }
    }, 70);

    // Action 4: Select language in dropdown
    setTimeout(() => {
      selectDropdownOption('input[placeholder="請選擇語言"]', '印度尼西亞語_印度尼西亞口音_女');
    }, 120);

    // Action 6: Click checkbox
    setTimeout(() => {
      const checkbox = document.querySelector('input[type="checkbox"].el-switch__input[true-value="true"]');
      if (checkbox && !checkbox.disabled) {
        checkbox.click();
      }
    }, 220);

    // Action 7: Select "sms-1" from the application dropdown
    setTimeout(() => {
      selectDropdownOption('input[placeholder="請選擇應用"]', 'sms-1');
    }, 270);

    // Action 8: Click the specific checkbox with value="4"
    setTimeout(() => {
      const targetCheckboxSpan = document.querySelector('span.el-checkbox__input:has(input[type="checkbox"][value="4"])');
      if (targetCheckboxSpan) {
        const originalInput = targetCheckboxSpan.querySelector('input[type="checkbox"].el-checkbox__original');
        if (!originalInput || !originalInput.disabled) {
          targetCheckboxSpan.click();
        }
      }
    }, 320);

    // Action 5: Click the "Convert" button
    setTimeout(() => {
      const convertButton = document.querySelector('button.el-button.primary-btn.small.el-button--default span');
      if (convertButton && convertButton.textContent.includes('轉化')) {
        convertButton.click();
      }
    }, 600);

    // Action 9: Find textarea with placeholder = "請輸入短訊內容" and fill with dynamic input
    setTimeout(() => {
      const textarea = document.querySelector('textarea[placeholder="請輸入短訊內容"]');
      if (textarea) {
        const dynamicValue = getDynamicInput('Enter the SMS content for the textarea:', 'smsContent');
        if (dynamicValue !== null) {
          textarea.value = dynamicValue;
          textarea.dispatchEvent(new Event('input', {
            bubbles: true
          }));
          console.log(`Đã điền giá trị "${dynamicValue}" vào textarea có placeholder "請輸入短訊內容"`);
        } else {
          console.log('Người dùng đã hủy nhập liệu.');
        }
      } else {
        console.log('Không tìm thấy textarea có placeholder "請輸入短訊 nội dung"');
      }
    }, 450);
  }

  // --- Tool 4: Tin nhắn mã quà tặng (mọi người) ---
  function tool4() {
    (async () => {
      const wrapper = document.querySelector(".el-select__wrapper");
      if (!wrapper) return console.error("Dropdown not found.");
      if (wrapper.getAttribute("aria-expanded") !== "true") {
        wrapper.click();
        await new Promise(r => setTimeout(r, 200));
      }
      const item = [...document.querySelectorAll(".el-select-dropdown__item")].find(el => el.textContent.trim() === "所有人");
      if (item) {
        item.click();
        console.log("Selected '所有人'.");
      } else {
        console.error("'所有人' item not found.");
      }

      function w(t) {
        return new Promise(r => setTimeout(r, t));
      }

      function f(t, e, n = 0) {
        let r = document.querySelectorAll(t);
        if (r.length > n) {
          let o = r[n];
          o.value = e;
          ["input", "change"].forEach(ev => o.dispatchEvent(new Event(ev, {
            bubbles: !0
          })));
          o.dispatchEvent(new CompositionEvent("compositionend", {
            bubbles: !0
          }));
          o.focus();
          o.blur();
        }
      }

      let t = document.querySelector(".ql-editor");
      if (!t) return console.warn("❌ .ql-editor");

      t.innerHTML = `<p>🎉 Raih kesempatan emas <u style="color: rgb(230, 0, 0);">88main</u>! 🔥</p><p>💰 2 set kode penukaran akan diterbitkan untuk waktu terbatas setiap hari!</p><p>Setiap set kode penukaran berpeluang memenangkan hadiah super hingga 100 juta! 🎁</p><p>👉 Waktu penerbitan: 08-18 jam • 18-00 jam</p><p>📲 Ikuti kanal resmi kami untuk mendapatkan kode penukaran lengkap dan informasi diskon terbaru!</p><p>👉 Klik Ikuti:&nbsp; <a href="https://whatsapp.com/channel/0029VbBMkET8KMqkB2pGhx39" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 71, 178);">[WhatsApp]</a></p><p>👉 Klik Ikuti:&nbsp; <a href="https://t.me/MainResmi" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 71, 178);">[Telegram]</a></p>`;

      f('input[placeholder="请输入邮件标题"]', "Kode Hadiah Hari Ini!");
      f('input[placeholder="请输入奖励金额"]', 0);

      const e = Array.from(document.querySelectorAll("span")).find(t => t.textContent.includes("金币(百分比)"));
      let n = null;
      if (e) {
        const t = e.nextElementSibling;
        t && t.classList.contains("el-input") && (n = t.querySelector('input.el-input__inner[type="number"]'));
      }
      if (n) {
        n.value = "0";
        n.dispatchEvent(new Event("input", {
          bubbles: !0
        }));
        n.dispatchEvent(new Event("change", {
          bubbles: !0
        }));
        console.log('✅ Đã điền "0" vào trường "金币(百分比):".');
      } else console.error('❌ Không tìm thấy trường nhập liệu cho "金币(百分比):".');

      let timeOptionResolver;
      const timeOptionPromise = new Promise(resolve => {
        timeOptionResolver = resolve;
      });

      const selectionBox = document.createElement('div');
      selectionBox.style.position = 'fixed';
      selectionBox.style.top = '50%';
      selectionBox.style.left = '50%';
      selectionBox.style.transform = 'translate(-50%, -50%)';
      selectionBox.style.backgroundColor = 'white';
      selectionBox.style.border = '1px solid #ccc';
      selectionBox.style.padding = '20px';
      selectionBox.style.zIndex = '9999';
      selectionBox.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      selectionBox.style.borderRadius = '8px';
      selectionBox.style.textAlign = 'center';
      selectionBox.innerHTML = `
        <h3>Vui lòng chọn khung giờ cho mã đổi thưởng:</h3>
        <button id="option1Btn" style="margin: 10px; padding: 10px 20px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px;">8 AM - 6 PM</button>
        <button id="option2Btn" style="margin: 10px; padding: 10px 20px; cursor: pointer; background-color: #008CBA; color: white; border: none; border-radius: 5px;">6 PM - Midnight</button>
      `;
      document.body.appendChild(selectionBox);

      document.getElementById('option1Btn').addEventListener('click', () => {
        timeOptionResolver('1');
        selectionBox.remove();
      });

      document.getElementById('option2Btn').addEventListener('click', () => {
        timeOptionResolver('2');
        selectionBox.remove();
      });

      const timeOption = await timeOptionPromise;

      let remarkText = "";
      let startTimeHours = 0;
      let startTimeMinutes = 0;
      let endTimeHours = 0;
      let endTimeMinutes = 0;
      let endTimeSeconds = 0;

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      if (timeOption === "1") {
        remarkText = "8点到18点兑换码";
        startTimeHours = 8;
        startTimeMinutes = 0;
        endTimeHours = 18;
        endTimeMinutes = 0;
        endTimeSeconds = 0;
      } else if (timeOption === "2") {
        remarkText = "18到00点兑换码";
        startTimeHours = 18;
        startTimeMinutes = 0;
        endTimeHours = 23;
        endTimeMinutes = 59;
        endTimeSeconds = 59;
      } else {
        console.warn("Lựa chọn không hợp lệ. Sử dụng cài đặt mặc định hoặc thời gian hiện tại.");
        startTimeHours = now.getHours();
        startTimeMinutes = now.getMinutes();
        now.setMinutes(0, 0, 0);
        endTimeHours = 23;
        endTimeMinutes = 59;
        endTimeSeconds = 59;
        remarkText = "兑换码";
      }

      const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startTimeHours, startTimeMinutes, 0);
      const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endTimeHours, endTimeMinutes, endTimeSeconds);

      function formatDate(dt) {
        const y = dt.getFullYear();
        const m = String(dt.getMonth() + 1).padStart(2, "0");
        const d = String(dt.getDate()).padStart(2, "0");
        const h = String(dt.getHours()).padStart(2, "0");
        const min = String(dt.getMinutes()).padStart(2, "0");
        const s = String(dt.getSeconds()).padStart(2, "0");
        return `${y}-${m}-${d} ${h}:${min}:${s}`;
      }

      async function fillAndTriggerImproved(selector, value) {
        const el = document.querySelector(selector);
        if (!el) {
          console.warn(`Không tìm thấy input: ${selector}`);
          return;
        }

        el.focus();
        el.value = '';

        for (let i = 0; i < value.length; i++) {
          el.value += value[i];
          el.dispatchEvent(new Event('input', {
            bubbles: true
          }));
          await w(10);
        }

        ['change', 'blur', 'keyup', 'compositionend'].forEach(evt => {
          el.dispatchEvent(new Event(evt, {
            bubbles: true
          }))
        });
        el.blur();
        console.log(`✅ Đã điền "${value}" vào trường "${selector}"`);
      }

      await fillAndTriggerImproved('input[placeholder="邮件开启时间"]', formatDate(startTime));
      await fillAndTriggerImproved('input[placeholder="邮件截止时间"]', formatDate(endTime));
      console.log("✅ Đã điền thời gian 邮件开启时间 và 邮件截止时间");

      const remarkInput = document.querySelector('input[placeholder="备注"]');
      if (remarkInput) {
        await fillAndTriggerImproved('input[placeholder="备注"]', remarkText);
      } else {
        console.warn('❌ Không tìm thấy input placeholder="备注"');
      }

      console.log("✅ Hoàn tất nội dung");
    })();
  }

  // --- Tool 5: Tin nhắn Push (ngẫu nhiên & VIP) ---
  function tool5() {
    (async () => {
      function w(t) {
        return new Promise(r => setTimeout(r, t))
      }

      function f(e, t) {
        e.focus();
        e.value = t;
        ["keydown", "keypress", "keyup", "input", "change", "blur"].forEach(ev => e.dispatchEvent(new Event(ev, {
          bubbles: !0
        })));
        e.dispatchEvent(new CompositionEvent("compositionend", {
          bubbles: !0
        }));
        e.blur();
      }

      const o = [{
        title: "🎯 KODE RAHASIA SUDAH TERSEDIA!",
        content: "📲 Akses lewat Telegram & WhatsApp\n🎁 Bonus terbatas waktu!"
      }, {
        title: "🧧 ANGPAO KODE UNTUKMU!",
        content: "🔑 Buka Telegram & WhatsApp\n🎉 Ambil sebelum terlambat!"
      }, {
        title: "🧨 KODE BONUS SIAP LEDAKAN!",
        content: "📲 Khusus pengguna Telegram & WhatsApp\n💥 Klaim secepat kilat!"
      }, {
        title: "🎊 KODE HARI INI TELAH DIRILIS!",
        content: "📩 Gabung Telegram & WhatsApp\n🎁 Ambil hadiahmu hari ini!"
      }, {
        title: "🔐 BUKA KODE RAHASIA SEKARANG!",
        content: "📱 Telegram & WhatsApp menyimpan rahasia\n🎉 Jangan lewatkan!"
      }, {
        title: "💡 SPESIAL UNTUKMU!",
        content: "📲 Kode di Telegram & WhatsApp\n🎁 Hanya berlaku hari này!"
      }, {
        title: "💰 BONUS EKSKLUSIF AKTIF!",
        content: "📦 Cek Telegram & WhatsApp\n🎯 Ambil kodenya segera!"
      }, {
        title: "🪄 KODE MAGIS TELAH MUNCUL!",
        content: "📩 Cari ở Telegram & WhatsApp\n🎁 Hadiah unik menanti!"
      }, {
        title: "🎮 RAIH BONUS KODE SEKARANG!",
        content: "📲 Akses cepat qua Telegram & WhatsApp\n🚀 Sẵn sàng chơi & thắng!"
      }, {
        title: "🎈 KODE SPESIAL BUATMU!",
        content: "📩 Chỉ có sẵn qua Telegram & WhatsApp\n🎁 Yêu cầu ngay!"
      }, {
        title: "🛡️ KESEMPATAN TERAKHIR!",
        content: "🔑 Mở Telegram & WhatsApp\n🎁 Mã sẽ hết hạn!"
      }, {
        title: "🎼 BONUS NADA KEMENANGAN!",
        content: "📲 Telegram & WhatsApp hoạt động\n🎉 Giành lấy phần thưởng của bạn ngay bây giờ!"
      }, {
        title: "🧿 BONUS UNTUK MATA JELI!",
        content: "📩 Mã có sẵn trên Telegram/WhatsApp\n🎁 Ai nhanh hơn thì được!"
      }, {
        title: "🏆 JUARA DAPAT KODE!",
        content: "📱 Chỉ trên Telegram & WhatsApp\n🎁 Quà tặng tức thì đã sẵn sàng!"
      }, {
        title: "👑 BONUS KODE VIP!",
        content: "📲 Telegram & WhatsApp độc quyền\n🎁 Dành cho người dùng được chọn!"
      }, {
        title: "📢 KODE RAHASIA HÔM NAY!",
        content: "📩 Telegram & WhatsApp\n🎁 Chỉ có giá trị trong vài giờ!"
      }, {
        title: "🌀 PUTAR KESEMPATANMU!",
        content: "📲 Kiểm tra Telegram & WhatsApp\n🎁 Mã sẽ di chuyển nhanh!"
      }, {
        title: "💎 HADIAH DI BALIK KODE!",
        content: "📩 Mở qua Telegram & WhatsApp\n🎉 Yêu cầu chỉ với một cú nhấp chuột!"
      }, {
        title: "📤 KODE TELAH DIKIRIM!",
        content: "📲 Telegram & WhatsApp lưu trữ nó\n🎁 Đừng để nó trôi qua!"
      }, {
        title: "📍 KODE BONUS HARIAN!",
        content: "📩 Xem trên Telegram & WhatsApp\n🎁 Quà tặng sẵn sàng được yêu cầu!"
      }, {
        title: "🏁 KODE SẴN SÀNG ĐỂ BẮT ĐẦU!",
        content: "📲 Trực tiếp tới Telegram & WhatsApp\n🎉 Cơ hội đã mở!"
      }, {
        title: "📸 TANGKAP BONUSNYA!",
        content: "📩 Telegram & WhatsApp đã cập nhật\n🎁 Chụp ảnh ngay!"
      }, {
        title: "🪙 KODE TIỀN TỆ KỸ THUẬT SỐ!",
        content: "📲 Telegram & WhatsApp\n🎁 Đổi trực tiếp thành tiền thưởng!"
      }, {
        title: "🧙‍♂️ BÍ MẬT TỪ NGƯỜI GIỮ!",
        content: "📩 Telegram & WhatsApp biết câu trả lời\n🎁 Bạn đã sẵn sàng mở chưa?"
      }, {
        title: "📜 THƯỞNG VIẾT HÔM NAY!",
        content: "📲 Tìm kiếm qua Telegram & WhatsApp\n🎁 Đọc & giành chiến thắng!"
      }, {
        title: "✨ THƯỞNG NHANH ĐÃ HẠ CÁNH!",
        content: "📩 Telegram & WhatsApp đã hoạt động\n🎁 Yêu cầu nhanh chóng hôm nay!"
      }, {
        title: "🧲 KÉO THƯỞNG BẰNG MÃ!",
        content: "📲 Telegram & WhatsApp\n🎁 Quyền truy cập của bạn trở thành nam châm quà tặng!"
      }, {
        title: "📂 FILE BÍ MẬT ĐÃ ĐƯỢC MỞ!",
        content: "📩 Mở trong Telegram & WhatsApp\n🎁 Mã ở bên trong!"
      }, {
        title: "⚙️ KODE CƠ KHÍ SẴN SÀNG HÀNH ĐỘNG!",
        content: "📲 Telegram & WhatsApp đang làm việc\n🎁 Phần thưởng bất ngờ!"
      }, {
        title: "📦 MỞ HỘP QUÀ TẶNG HÔM NAY!",
        content: "📩 Telegram & WhatsApp đang giao hàng\n🎁 Mở hộp ngay lập tức!"
      }, {
        title: "🌟 KODE DÀNH CHO NGƯỜI DÙNG TRUNG THÀNH!",
        content: "📲 Telegram & WhatsApp\n🎁 Phần thưởng lòng trung thành đã được kích hoạt!"
      }, {
        title: "📲 KODE TỨC THÌ QUA TIN NHẮN!",
        content: "📩 Telegram & WhatsApp\n🎁 Nhận ngay, nhanh lên!"
      }, {
        title: "🎁 THƯỞNG HÔM NAY ĐÃ ĐẾN!",
        content: "📱 Mở Telegram/WhatsApp\n🎉 Đừng bỏ lỡ!"
      }, {
        title: "🎉 KODE ẨN ĐÃ KÍCH HOẠT!",
        content: "📩 Truy cập Telegram & WhatsApp\n🧨 Mã chỉ xuất hiện trong thời gian ngắn!"
      }, {
        title: "🔑 KODE ĐỂ VÀO THẾ GIỚI TIỀN THƯỞNG!",
        content: "📲 Telegram & WhatsApp là chìa khóa\n🎁 Mở thế giới quà tặng của bạn!"
      }, {
        title: "🌈 BẤT NGỜ THƯỞNG ĐẦY MÀU SẮC!",
        content: "📩 Tìm trên Telegram & WhatsApp\n🎁 Quà tặng đầy màu sắc đang chờ đợi!"
      }];

      const s = o[Math.floor(Math.random() * o.length)];

      const n = document.querySelector('input[placeholder="请输入推送标题"]');
      n ? f(n, s.title) : console.warn("❌ Không tìm thấy input tiêu đề");

      const r = document.querySelector('textarea[placeholder="请输入推送内容"]');
      r ? f(r, s.content) : console.warn("❌ Không tìm thấy textarea nội dung");

      const minVipInput = document.querySelector('input[placeholder="最小VIP等级"]');
      if (minVipInput) f(minVipInput, '0');
      else console.warn("❌ Không tìm thấy input 最小VIP等级");

      const maxVipInput = document.querySelector('input[placeholder="最大VIP等级"]');
      if (maxVipInput) f(maxVipInput, '20');
      else console.warn("❌ Không tìm thấy input 最大VIP等级");
    })();
  }

  // --- Tool 6: Tin nhắn hộp quà 2 ---
  function tool6() {
    (async () => {
      function w(t) {
        return new Promise(r => setTimeout(r, t))
      }

      async function s(selector, textContent) {
        let e = document.querySelector(selector);
        if (!e) return console.warn(`❌ dropdown ${selector}`), !1;
        if ("true" != e.getAttribute("aria-expanded")) {
          e.click();
          await w(200);
        }
        if ([...document.querySelectorAll(".el-select-dropdown__item")].find(t => {
            if (textContent === t.textContent.trim()) {
              t.click();
              return !0;
            }
          })) return await w(100), !0;
        return console.warn(`❌ mục "${textContent}"`), !1;
      }

      function f(t, e, n = 0) {
        let r = document.querySelectorAll(t);
        if (r.length > n) {
          let o = r[n];
          o.value = e;
          ["input", "change"].forEach(ev => o.dispatchEvent(new Event(ev, {
            bubbles: !0
          })));
          o.dispatchEvent(new CompositionEvent("compositionend", {
            bubbles: !0
          }));
          o.focus();
          o.blur();
        }
      }

      function fillAndTrigger(selector, value) {
        const el = document.querySelector(selector);
        if (!el) {
          console.warn(`Không tìm thấy input: ${selector}`);
          return;
        }
        el.focus();
        el.value = value;
        ['input', 'change', 'blur', 'keyup'].forEach(evt => {
          el.dispatchEvent(new Event(evt, {
            bubbles: true
          }))
        });
        el.blur();
      }

      if (await s(".el-select__wrapper", "礼盒型站内信")) {
        let t = document.querySelector(".ql-editor");
        if (!t) return console.warn("❌ .ql-editor");

        t.innerHTML = '<p>🌟 Hai Pemain <span style="color: rgb(153, 51, 255);">88main</span>!</p><p><br></p><p>🎉 Selamat! Bạn đã nhận được Bonus Misterius hấp dẫn! 🎁 Hãy tận hưởng phần thưởng đặc biệt này và tiếp tục niềm vui chơi game tại <span style="color: rgb(153, 51, 255);">88main</span>!</p><p><br></p><p>📲 Theo dõi các kênh chính thức của chúng tôi để nhận thông tin khuyến mãi mới nhất!</p><p><br></p><p>👉 Nhấp để theo dõi:&nbsp; <a href="https://whatsapp.com/channel/0029VbBMkET8KMqkB2pGhx39" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 71, 178);">[WhatsApp]</a></p><p><br></p><p>👉 Nhấp để theo dõi:&nbsp; <a href="https://t.me/MainResmi" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 71, 178);">[Telegram]</a></p>';
        console.log("✅ Đã cập nhật nội dung .ql-editor");

        f('input[placeholder="请输入邮件标题"]', "🌟Bonus misterius🌟");
        f('input[placeholder="奖励下限"]', 100);
        f('input[placeholder="奖励上限"]', 500);

        const bonusPercentSpan = Array.from(document.querySelectorAll("span")).find(t => t.textContent.includes("Bonus(百分比)"));
        let bonusPercentInput = null;
        if (bonusPercentSpan) {
          const nextEl = bonusPercentSpan.nextElementSibling;
          if (nextEl && nextEl.classList.contains("el-input")) {
            bonusPercentInput = nextEl.querySelector('input.el-input__inner[type="number"]');
          }
        }
        if (bonusPercentInput) {
          bonusPercentInput.value = "100";
          bonusPercentInput.dispatchEvent(new Event("input", {
            bubbles: !0
          }));
          bonusPercentInput.dispatchEvent(new Event("change", {
            bubbles: !0
          }));
          console.log('✅ Đã điền "100" vào trường "Bonus(百分%)".');
        } else {
          console.error('❌ Không tìm thấy trường nhập liệu cho "Bonus(百分%)".');
        }

        const now = new Date();
        const startTime = new Date(now);
        startTime.setMinutes(0, 0, 0);

        const endTime = new Date(now);
        endTime.setHours(23, 59, 59, 0);

        function formatDate(dt) {
          const y = dt.getFullYear();
          const m = String(dt.getMonth() + 1).padStart(2, "0");
          const d = String(dt.getDate()).padStart(2, "0");
          const h = String(dt.getHours()).padStart(2, "0");
          const min = String(dt.getMinutes()).padStart(2, "0");
          const s = String(dt.getSeconds()).padStart(2, "0");
          return `${y}-${m}-${d} ${h}:${min}:${s}`;
        }

        fillAndTrigger('input[placeholder="邮件开启时间"]', formatDate(startTime));
        fillAndTrigger('input[placeholder="邮件截止时间"]', formatDate(endTime));
        console.log("✅ Đã điền thời gian 邮件开启时间 và 邮件截止 thời gian.");

        const today = new Date();
        const day = String(today.getDate());
        const remarkText = `${day}号 1点mystery`;
        const remarkInput = document.querySelector('input[placeholder="备注"]');
        if (remarkInput) {
          remarkInput.focus();
          remarkInput.value = remarkText;
          ['input', 'change', 'blur', 'keyup'].forEach(evt => {
            remarkInput.dispatchEvent(new Event(evt, {
              bubbles: true
            }))
          });
          remarkInput.blur();
          console.log(`✅ Đã điền 备注: ${remarkText}`);
        } else {
          console.warn('❌ Không tìm thấy input placeholder="备注"');
        }

        fillAndTrigger('input[placeholder="请输入bonusId"]', '1008001');
        console.log('✅ Đã điền "1008001" vào trường "请输入bonusId".');

        await w(500);
        if (await s('.el-select:not(.el-select--disabled) .el-select__wrapper', "所有人")) {
          console.log("✅ Hoàn tất tất cả các thao tác.");
        } else {
          console.warn("⛔ Lỗi khi chọn '所有人' trong dropdown.");
        }

      } else {
        console.warn("⛔ Lỗi dropdown ban đầu (礼盒型站内信)");
      }
    })();
  }


  // --- Menu gọi các tool ---
  (function() {
    // Kiểm tra menu đã tồn tại chưa, nếu có thì không tạo lại
    if (document.getElementById('myBookmarkletMenu')) return;

    // Tạo thẻ div cho menu
    const menu = document.createElement('div');
    menu.id = 'myBookmarkletMenu';
    menu.style.position = 'fixed';
    menu.style.top = '10px';
    menu.style.right = '10px';
    menu.style.background = '#fff';
    menu.style.padding = '10px';
    menu.style.border = '1px solid #ccc';
    menu.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    menu.style.zIndex = '9999';
    menu.style.fontFamily = 'sans-serif';
    menu.style.borderRadius = '8px'; // Add some rounded corners
    menu.style.maxWidth = '250px'; // Limit width for better appearance

    // Tạo tiêu đề menu
    const title = document.createElement('h3');
    title.textContent = 'Chọn Tool:';
    title.style.margin = '0 0 10px 0';
    title.style.color = '#333';
    menu.appendChild(title);

    // Tạo nút Tool 1
    const btn1 = document.createElement('button');
    btn1.textContent = '88每小时';
    btn1.onclick = tool1;
    btn1.style.display = 'block'; // Make button a block element
    btn1.style.width = '100%'; // Full width
    btn1.style.padding = '8px 12px';
    btn1.style.marginBottom = '5px';
    btn1.style.backgroundColor = '#007bff';
    btn1.style.color = 'white';
    btn1.style.border = 'none';
    btn1.style.borderRadius = '4px';
    btn1.style.cursor = 'pointer';
    btn1.onmouseover = function() {
      this.style.backgroundColor = '#0056b3';
    };
    btn1.onmouseout = function() {
      this.style.backgroundColor = '#007bff';
    };
    menu.appendChild(btn1);

    // Tạo nút Tool 2
    const btn2 = document.createElement('button');
    btn2.textContent = '1-20推送';
    btn2.onclick = tool2;
    btn2.style.display = 'block';
    btn2.style.width = '100%';
    btn2.style.padding = '8px 12px';
    btn2.style.marginBottom = '5px';
    btn2.style.backgroundColor = '#28a745';
    btn2.style.color = 'white';
    btn2.style.border = 'none';
    btn2.style.borderRadius = '4px';
    btn2.style.cursor = 'pointer';
    btn2.onmouseover = function() {
      this.style.backgroundColor = '#218838';
    };
    btn2.onmouseout = function() {
      this.style.backgroundColor = '#28a745';
    };
    menu.appendChild(btn2);

    // Tạo nút Tool 3
    const btn3 = document.createElement('button');
    btn3.textContent = 'sms';
    btn3.onclick = tool3;
    btn3.style.display = 'block';
    btn3.style.width = '100%';
    btn3.style.padding = '8px 12px';
    btn3.style.marginBottom = '5px';
    btn3.style.backgroundColor = '#ffc107';
    btn3.style.color = 'black';
    btn3.style.border = 'none';
    btn3.style.borderRadius = '4px';
    btn3.style.cursor = 'pointer';
    btn3.onmouseover = function() {
      this.style.backgroundColor = '#e0a800';
    };
    btn3.onmouseout = function() {
      this.style.backgroundColor = '#ffc107';
    };
    menu.appendChild(btn3);

    // Tạo nút Tool 4
    const btn4 = document.createElement('button');
    btn4.textContent = '站内信兑换码88';
    btn4.onclick = tool4;
    btn4.style.display = 'block';
    btn4.style.width = '100%';
    btn4.style.padding = '8px 12px';
    btn4.style.marginBottom = '5px';
    btn4.style.backgroundColor = '#17a2b8';
    btn4.style.color = 'white';
    btn4.style.border = 'none';
    btn4.style.borderRadius = '4px';
    btn4.style.cursor = 'pointer';
    btn4.onmouseover = function() {
      this.style.backgroundColor = '#138496';
    };
    btn4.onmouseout = function() {
      this.style.backgroundColor = '#17a2b8';
    };
    menu.appendChild(btn4);

    // Tạo nút Tool 5
    const btn5 = document.createElement('button');
    btn5.textContent = 'code推送';
    btn5.onclick = tool5;
    btn5.style.display = 'block';
    btn5.style.width = '100%';
    btn5.style.padding = '8px 12px';
    btn5.style.marginBottom = '5px';
    btn5.style.backgroundColor = '#dc3545';
    btn5.style.color = 'white';
    btn5.style.border = 'none';
    btn5.style.borderRadius = '4px';
    btn5.style.cursor = 'pointer';
    btn5.onmouseover = function() {
      this.style.backgroundColor = '#c82333';
    };
    btn5.onmouseout = function() {
      this.style.backgroundColor = '#dc3545';
    };
    menu.appendChild(btn5);

    // Tạo nút Tool 6
    const btn6 = document.createElement('button');
    btn6.textContent = '1点mystery';
    btn6.onclick = tool6;
    btn6.style.display = 'block';
    btn6.style.width = '100%';
    btn6.style.padding = '8px 12px';
    btn6.style.marginBottom = '5px';
    btn6.style.backgroundColor = '#6f42c1';
    btn6.style.color = 'white';
    btn6.style.border = 'none';
    btn6.style.borderRadius = '4px';
    btn6.style.cursor = 'pointer';
    btn6.onmouseover = function() {
      this.style.backgroundColor = '#5a2d9c';
    };
    btn6.onmouseout = function() {
      this.style.backgroundColor = '#6f42c1';
    };
    menu.appendChild(btn6);


    // Tạo nút đóng menu
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '5px';
    closeBtn.style.right = '5px';
    closeBtn.style.border = 'none';
    closeBtn.style.background = 'transparent';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#555';
    closeBtn.onclick = function() {
      document.body.removeChild(menu);
    };
    menu.appendChild(closeBtn);

    // Thêm menu vào trang
    document.body.appendChild(menu);
  })();
})();