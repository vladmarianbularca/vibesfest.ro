var map;
var markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.6422377, lng: 25.5890914 }, // Piața Sfatului coordinates
    zoom: 18.5, // Adjust the initial zoom level as needed
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  var icons = [
    {
      lat: 45.641762,
      lng: 25.588876,
      iconUrl: "images/microphone_164580.svg",
      title:
        "<b><center><strong>Main Stage</strong><br>Concert Subcarpati<br>Gala de premiere<br>Show de lasere<br>DJ Concert</center></b>",
    }, // Foloseste <br> pt a scrie cu aliniat ca in exemplu dat
    {
      lat: 45.64221,
      lng: 25.588966,
      iconUrl: "images/generatia tech.svg",
      title:
        "<b><center><strong>Chill out Generatia Tech</strong><br>Zona de iarba artificiala cu beanbags<br>40 de Beanbags<br>8 Cuburi luminoase(cu functie de masa luminoasa intre beanbags) + 4 masute<br>Panou parteneri Generatia Tech</center></b>",
    }, // De aici se adauga informatiile la text box
    {
      lat: 45.642255,
      lng: 25.5891722,
      iconUrl: "images/vol brasov.svg",
      title:
        "<b><center><strong>Chill out Voluntariat BV</strong><br>Beanbags Municipiul Brasov + 10 fotolii</center></b>",
    },
    {
      lat: 45.6422667,
      lng: 25.5887286,
      iconUrl: "images/afi brasov.svg",
      title:
        "<b><center><strong>Chill out AFI</strong><br>Leagan #AFIrelaxat<br>AFIrelaxat beanbags & chill<br>Bicicleta incarcare telefon<br>BAFFI pentru copii de care nu putem scapa</center></b>",
    },
    {
      lat: 45.642436,
      lng: 25.589243,
      iconUrl: "images/gaming.svg",
      title:
        "<b><center><strong>Zona de jocuri #1</strong><br>Ladder Golf<br>Corn Hole<br>Mega 4</center></b>",
    },
    {
      lat: 45.64235,
      lng: 25.589298,
      iconUrl: "images/gaming.svg",
      title:
        "<b><center><strong>Zona de jocuri #2</strong><br>Sah Gigantic<br>Mega Thumble Tower<br>Woooden Scatter<br>Labirint vertical<br>X si Zero</center></b>",
    },
    {
      lat: 45.642559,
      lng: 25.589148,
      iconUrl: "images/zona jocuri.svg",
      title:
        "<b><center><strong>Game Stage</strong><br>4 mese de Foosball Bonzini</center></b>",
    },
    {
      lat: 45.642257,
      lng: 25.589317,
      iconUrl: "images/paint.svg",
      title:
        "<b><center><strong>Experienta de pictura</strong><br>Zona de pictura si tatuaje fosforecente + masa de logistica</center></b>",
    },
    {
      lat: 45.642192,
      lng: 25.588746,
      iconUrl: "images/foto360.svg",
      title:
        "<b><center><strong>Foto-Video 360grade</strong><br>Video Booth 360grade cu panou de background si podina</center></b>",
    },
    {
      lat: 45.6421955,
      lng: 25.5899155,
      iconUrl: "images/generatia tech.svg",
      title:
        "<b><center><strong>Registration Generatia Tech</strong><br>Corturi Generatia Tech & Voluntariat BV + Rolllup</center></b>",
    },

    {
      lat: 45.642719,
      lng: 25.589034,
      iconUrl: "images/vol brasov.svg",
      title:
        "<b><center><strong>Registration Voluntariat BV</strong><br>Corturi Voluntariat BV & Generatia Tech + Rolllup</center></b>",
    },

    {
      lat: 45.6427158,
      lng: 25.5890066,
      iconUrl: "images/generatia tech.svg",
      title:
        "<b><center><strong>Registration Voluntariat BV</strong><br>Corturi Voluntariat BV & Generatia Tech + Rolllup</center></b>",
    },
    {
      lat: 45.6421769,
      lng: 25.5899423,
      iconUrl: "images/vol brasov.svg",
      title:
        "<b><center><strong>Registration Voluntariat BV</strong><br>Corturi Voluntariat BV & Generatia Tech + Rolllup</center></b>",
    },
    {
      lat: 45.642274,
      lng: 25.589499,
      iconUrl: "images/dish.svg",
      title:
        "<b><center><strong>Zona de mancare</strong><br>Inghetata<br>Vata pe bat si floricele<br>Limonada non-alcoolica</center></b>",
    },
    {
      lat: 45.641807,
      lng: 25.589269,
      iconUrl: "images/deal.svg",
      title:
        "<b><center><strong>Zona Parteneri</strong><br>VIP Area<br>Cabina Foto VIP<br>4 Canapele<br>Un fotoliu + o masa centrala</center></b>",
    },
  ];

  icons.forEach(function (iconInfo) {
    var marker = new google.maps.Marker({
      position: { lat: iconInfo.lat, lng: iconInfo.lng },
      map: map,
      icon: {
        url: iconInfo.iconUrl,
        scaledSize: new google.maps.Size(40, 40), // Adjust the size if needed
      },
      // title: iconInfo.title,
    });

    markers.push(marker);

    marker.addListener("mouseover", function () {
      marker.setIcon({
        url: iconInfo.iconUrl, // Agauga o iconita diferita pt hover effect daca vrei
        scaledSize: new google.maps.Size(50, 50), // Adjust the size if needed
      });
    });

    marker.addListener("mouseout", function () {
      marker.setIcon({
        url: iconInfo.iconUrl,
        scaledSize: new google.maps.Size(40, 40),
      });
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<div>" + iconInfo.title + "</div>",
    });

    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });

    // Close info window when clicking anywhere on the map
    map.addListener("click", function () {
      if (infowindow.open) {
        infowindow.close();
      }
    });
  });
}
