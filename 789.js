(async() => {
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
    title: " unlocking_code BUKA KODE RAHASIA SEKARANG!",
    content: "📱 Telegram & WhatsApp menyimpan rahasia\n🎉 Jangan lewatkan!"
  }, {
    title: "💡 SPESIAL UNTUKMU!",
    content: "📲 Kode di Telegram & WhatsApp\n🎁 Hanya berlaku hari ini!"
  }, {
    title: "💰 BONUS EKSKLUSIF AKTIF!",
    content: "📦 Cek Telegram & WhatsApp\n🎯 Ambil kodenya segera!"
  }, {
    title: "🪄 KODE MAGIS TELAH MUNCUL!",
    content: "📩 Cari di Telegram & WhatsApp\n🎁 Hadiah unik menanti!"
  }, {
    title: "🎮 RAIH BONUS KODE SEKARANG!",
    content: "📲 Akses cepat via Telegram & WhatsApp\n🚀 Siap main & menang!"
  }, {
    title: "🎈 KODE SPESIAL BUATMU!",
    content: "📩 Hanya tersedia lewat Telegram & WhatsApp\n🎁 Klaim langsung!"
  }, {
    title: "🛡️ KESEMPATAN TERAKHIR!",
    content: "🔑 Buka Telegram & WhatsApp\n🎁 Kode akan kadaluarsa!"
  }, {
    title: "🎼 BONUS NADA KEMENANGAN!",
    content: "📲 Telegram & WhatsApp aktif\n🎉 Rebut hadiahmu sekarang!"
  }, {
    title: "🧿 BONUS UNTUK MATA JELI!",
    content: "📩 Kode tersedia di Telegram/WhatsApp\n🎁 Siapa cepat dia dapat!"
  }, {
    title: "🏆 JUARA DAPAT KODE!",
    content: "📱 Hanya di Telegram & WhatsApp\n🎁 Hadiah instan sudah siap!"
  }, {
    title: "👑 BONUS KODE VIP!",
    content: "📲 Telegram & WhatsApp eksklusif\n🎁 Untuk pengguna pilihan!"
  }, {
    title: "📢 KODE RAHASIA HARI INI!",
    content: "📩 Telegram & WhatsApp\n🎁 Cuma berlaku beberapa jam!"
  }, {
    title: "🌀 PUTAR KESEMPATANMU!",
    content: "📲 Cek Telegram & WhatsApp\n🎁 Kode akan berpindah cepat!"
  }, {
    title: "💎 HADIAH DI BALIK KODE!",
    content: "📩 Buka lewat Telegram & WhatsApp\n🎉 Klaim dengan satu klik!"
  }, {
    title: "📤 KODE TELAH DIKIRIM!",
    content: "📲 Telegram & WhatsApp menyimpannya\n🎁 Jangan biarkan berlalu!"
  }, {
    title: "📍 KODE BONUS HARIAN!",
    content: "📩 Lihat di Telegram & WhatsApp\n🎁 Hadiah siap diklaim!"
  }, {
    title: "🏁 KODE SIAP DIMULAI!",
    content: "📲 Langsung ke Telegram & WhatsApp\n🎉 Kesempatan terbuka!"
  }, {
    title: "📸 TANGKAP BONUSNYA!",
    content: "📩 Telegram & WhatsApp sudah update\n🎁 Ambil gambarnya sekarang!"
  }, {
    title: "🪙 KODE UANG DIGITAL!",
    content: "📲 Telegram & WhatsApp\n🎁 Tukar langsung jadi bonus!"
  }, {
    title: "🧙‍♂️ RAHASIA DARI PENJAGA!",
    content: "📩 Telegram & WhatsApp tahu jawabannya\n🎁 Siapkah kamu buka?"
  }, {
    title: "📜 BONUS TERTULIS HARI INI!",
    content: "📲 Cari lewat Telegram & WhatsApp\n🎁 Bacalah & menangkan!"
  }, {
    title: "✨ BONUS KILAT SUDAH TURUN!",
    content: "📩 Telegram & WhatsApp menyala\n🎁 Klaim kilat hari ini!"
  }, {
    title: "🧲 TARIK BONUS DENGAN KODE!",
    content: "📲 Telegram & WhatsApp\n🎁 Aksesmu jadi magnet hadiah!"
  }, {
    title: "📂 FILE RAHASIA TELAH DIBUKA!",
    content: "📩 Buka di Telegram & WhatsApp\n🎁 Kode ada di dalam!"
  }, {
    title: "⚙️ KODE MEKANIK SIAP AKSI!",
    content: "📲 Telegram & WhatsApp sedang bekerja\n🎁 Bonusnya tak terduga!"
  }, {
    title: "📦 BONGKAR HADIAH HARI INI!",
    content: "📩 Telegram & WhatsApp mengantarkannya\n🎁 Segera buka kotaknya!"
  }, {
    title: "🌟 KODE UNTUK PENGGUNA SETIA!",
    content: "📲 Telegram & WhatsApp\n🎁 Hadiah loyalitas telah aktif!"
  }, {
    title: "📲 KODE INSTAN VIA PESAN!",
    content: "📩 Telegram & WhatsApp\n🎁 Ambil sekarang, cepat!"
  }, {
    title: "🎁 BONUS HARI INI SUDAH DATANG!",
    content: "📱 Buka Telegram/WhatsApp\n🎉 Jangan biarkan berlalu!"
  }, {
    title: "🎉 KODE TERSEMBUNYI AKTIF!",
    content: "📩 Akses Telegram & WhatsApp\n🧨 Kode hanya muncul sebentar!"
  }, {
    title: "🔑 KODE MASUK DUNIA BONUS!",
    content: "📲 Telegram & WhatsApp jadi kunci\n🎁 Buka dunia hadiahmu!"
  }, {
    title: "🌈 KEJUTAN BONUS BERWARNA!",
    content: "📩 Temukan di Telegram & WhatsApp\n🎁 Warna-warni hadiah menanti!"
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