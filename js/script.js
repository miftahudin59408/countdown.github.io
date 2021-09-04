var countDate = new Date('jan 01 2022 00:00:00').getTime();

const hitunganMundur = setInterval(function () {
				var now = new Date().getTime();
				var selisih = countDate - now;
				
				var detik = 1000;
				var menit = detik * 60;
				var jam = menit * 60;
				var hari = jam * 24;
				
				var h = Math.floor(selisih / (hari));
				var j = Math.floor((selisih % (hari)) / (jam));
				var m = Math.floor((selisih % (jam)) / (menit));
				var d = Math.floor((selisih % (menit)) / (detik));
				
				var hari1 = document.getElementById('hari');
				var jam1 = document.getElementById('jam');
				var menit1 = document.getElementById('menit');
				var detik1 = document.getElementById('detik');
				var text1 = document.getElementById('text1');
				var text2 = document.getElementById('text2');
				
				hari1.innerText = h;
				jam1.innerText = j;
				menit1.innerText = m;
				detik1.innerText = d;
				text1.innerText = "Hitungan Mundur Menuju";
				text2.innerText = "Tahun Baru 2022";
				
				if( selisih <= 0 ) {
								clearInterval(hitunganMundur);
								hari1.innerText = '--';
								jam1.innerText = '--';
								menit1.innerText = '--';
								detik1.innerText = '--';
								text1.innerText = "Selamat";
								text2.innerText = "Tahun Baru 2022!!";
								$('#clear').removeClass("tombol");
								$('#clear').addClass("active");
				};
				
				
				
}, 1000);

$("#shareRoundIcons").jsSocials({ 
showLabel: false, showCount: false,
shares: ["email", "twitter", "facebook", "whatsapp"] 
});
