interface Soru {
  soru: string;
  cevaplar: {
    dogru: string;
    yanlis: string;
  };
  ipucu: string;
}

const sorular: Soru[] = [
  {
    soru: "Türkiye'nin başkenti neresidir?",
    cevaplar: {
      dogru: "Ankara",
      yanlis: "İstanbul",
    },
    ipucu: "Türkiye Büyük Millet Meclisi'nin bulunduğu şehirdir.",
  },
  {
    soru: "Dünyanın en yüksek dağı hangisidir?",
    cevaplar: {
      dogru: "Everest",
      yanlis: "K2",
    },
    ipucu: "Himalayalar'da yer alır ve zirvesi bulutların üzerindedir.",
  },
  {
    soru: "Hangi gezegen Güneş Sistemi'nin en büyük gezegenidir?",
    cevaplar: {
      dogru: "Jüpiter",
      yanlis: "Satürn",
    },
    ipucu: "Büyük Kırmızı Leke'ye sahip gaz devidir.",
  },
  {
    soru: "Türkiye'nin en uzun nehri hangisidir?",
    cevaplar: {
      dogru: "Kızılırmak",
      yanlis: "Fırat",
    },
    ipucu: "İç Anadolu Bölgesi'nden geçer ve Karadeniz'e dökülür.",
  },
  {
    soru: "Hangi ülke 'Güneşin Doğduğu Ülke' olarak bilinir?",
    cevaplar: {
      dogru: "Japonya",
      yanlis: "Çin",
    },
    ipucu: "Anime ve manga kültürüyle ünlüdür.",
  },
  {
    soru: "Ay'a ilk ayak basan insan kimdir?",
    cevaplar: {
      dogru: "Neil Armstrong",
      yanlis: "Buzz Aldrin",
    },
    ipucu: "Apollo 11 göreviyle Ay'a iniş yapmıştır.",
  },
  {
    soru: "Dünyanın en büyük okyanusu hangisidir?",
    cevaplar: {
      dogru: "Pasifik Okyanusu",
      yanlis: "Atlantik Okyanusu",
    },
    ipucu: "Yüzölçümü bakımından Dünya'nın yarısını kaplar.",
  },
  {
    soru: "Hangi hayvan memeli değildir?",
    cevaplar: {
      dogru: "Penguen",
      yanlis: "Yarasa",
    },
    ipucu: "Uçabilen tek memeli hayvandır.", // Yanlış cevaba ipucu
  },
  {
    soru: "Einstein hangi teoriyi geliştirmiştir?",
    cevaplar: {
      dogru: "Görelilik Teorisi",
      yanlis: "Evrim Teorisi",
    },
    ipucu: "Zaman, uzay ve kütleçekim ilişkisini açıklar.",
  },
  {
    soru: "Hangi ülke Eyfel Kulesi'ne ev sahipliği yapar?",
    cevaplar: {
      dogru: "Fransa",
      yanlis: "İtalya",
    },
    ipucu: "Aşk şehri olarak bilinir.",
  },
  {
    soru: "Mona Lisa tablosunu kim yapmıştır?",
    cevaplar: {
      dogru: "Leonardo da Vinci",
      yanlis: "Michelangelo",
    },
    ipucu: "Rönesans döneminin ünlü bir ressamıdır.",
  },
  {
    soru: "Hangi element periyodik tablonun ilk elementidir?",
    cevaplar: {
      dogru: "Hidrojen",
      yanlis: "Helyum",
    },
    ipucu: "En hafif ve evrende en bol bulunan elementtir.",
  },
  {
    soru: "Pi sayısının yaklaşık değeri kaçtır?",
    cevaplar: {
      dogru: "3.14",
      yanlis: "2.71",
    },
    ipucu: "Bir dairenin çevresinin çapına oranıdır.",
  },
  {
    soru: "Hangi vitamin güneş ışığı ile sentezlenir?",
    cevaplar: {
      dogru: "D Vitamini",
      yanlis: "C Vitamini",
    },
    ipucu: "Kemik sağlığı için önemlidir.",
  },
  {
    soru: "Hangi hayvan sürüngen değildir?",
    cevaplar: {
      dogru: "Kurbağa",
      yanlis: "Yılan",
    },
    ipucu: "Derisi nemli ve kaygandır.",
  },
  {
    soru: "Hangi kıta dünyanın en büyük kıtasıdır?",
    cevaplar: {
      dogru: "Asya",
      yanlis: "Afrika",
    },
    ipucu: "Çin, Hindistan ve Rusya gibi ülkeleri içerir.",
  },
  {
    soru: "Hangi ülke futbol tarihinde en çok Dünya Kupası kazanmıştır?",
    cevaplar: {
      dogru: "Brezilya",
      yanlis: "Almanya",
    },
    ipucu: "Samba futboluyla ünlüdür.",
  },
  {
    soru: "Hangi gezegen 'Kızıl Gezegen' olarak adlandırılır?",
    cevaplar: {
      dogru: "Mars",
      yanlis: "Venüs",
    },
    ipucu: "İnce bir atmosfere ve iki uyduya sahiptir.",
  },
  {
    soru: "Hangi ülke dünyanın en büyük kahve üreticisidir?",
    cevaplar: {
      dogru: "Brezilya",
      yanlis: "Kolombiya",
    },
    ipucu: "Amazon Ormanları'na ev sahipliği yapar.",
  },
  {
    soru: "Hangi organ insan vücudundaki en büyük organdır?",
    cevaplar: {
      dogru: "Deri",
      yanlis: "Karaciğer",
    },
    ipucu: "Vücudu dış etkenlerden korur.",
  },
];

export default sorular;
