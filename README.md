# POLANDGO.v.01
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="style.css">
<title>TEST MAPA</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="https://projects.davidlynch.org/maphilight/jquery.maphilight.min.js"></script>
    <script type="text/javascript">$(function() {
        $('.photo').maphilight({ fillColor:"8b8b92", fillOpacity: 1,  stroke: false});
    });
    </script>
</head>
<body>
<div class="navigation-bar">


    <div id="navigation-container">



        <ul>

            <img  class="sf" src="Bez%20nazwy-1.png" height="100px" width="100px" >
            <li><a class="napis" href="index.html">Strona Główna</a></li>
            <li><a class="napis" href="#">Informacje</a></li>


            <li><div class="dropdown">
                <button class="dropbtn">Polecane</button>
                <div class="dropdown-content">
                    <a class="zima" href="#">Zima</a>
                    <a class="wiosna" href="#">Wiosna</a>
                    <a class="lato" href="#">Lato</a>
                    <a class="jesien" href="#">Jesień</a>
                </div>
            </div>
            <li><a class="napis" href="#">Kontakt</a></li>
        </ul>
    </div>
</div>

<div class="map" style="padding: 10%">
    <img src="poland2_dark_mode.svg" usemap="#simple" class="photo" >

    <map name="simple">
        <area shape="circle" coords="907,573,31" href="/torun/torun.html" />
        <area shape="circle" coords="817,530,31" href="/bydgoszcz/bydgoszcz.html" />
        <area shape="circle" coords="102,466,31" href="sczecin/szczecin.html" />
        <area shape="circle" coords="907,164,31" href="gdansk/gdansk.html" />
        <area shape="circle" coords="1252,379,31" href="olsztyn/olsztyn.html" />
        <area shape="circle" coords="1872,588,31" href="bialystok/bialystok.html" />
        <area shape="circle" coords="1082,1002,31" href="lodz/lodz.html" />
        <area shape="circle" coords="606,1206,31" href="wroclaw/Wrocław.html" />
        <area shape="circle" coords="1347,896,31" href="warszawa/warszawa.html" />
        <area shape="circle" coords="1840,1250,31" href="lublin/lublin.html" />
        <area shape="circle" coords="776,1395,31" href="/opole/opole.html" />
        <area shape="circle" coords="520,821,31" href="/poznan/poznan.html" />
        <area shape="circle" coords="235,716,31" href="/gorzow/gorzow.html" />
        <area shape="circle" coords="1009,1330,31" href="/czestochowa/czestochowa.html" />
        <area shape="circle" coords="984,1575,31" href="/katowice/katowice.html" />
        <area shape="circle" coords="1286,1303,31" href="/kielce/kielce.html" />
        <area shape="circle" coords="1203,1691,31" href="/krakow/krakow.html" />
        <area shape="circle" coords="1632,1676,31" href="/rzeszow/rzeszow.html" />


    </map>
</div>

<div class="footer">
    <p>POLANDGO.pl sp. z o.o. z siedzibą w XYZ, przy ul. XYZ, bud D, xx-xxx XYZ zarejestrowana w Rejestrze Przedsiębiorców Krajowego Rejestru Sądowego prowadzonym przez Sąd Rejonowy dla m. st. Warszawy w Warszawie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem 0000412352, NIP 1132853869, REGON 146025969 i z kapitałem zakładowym w wysokości 18 134 050,00 zł.</p>
</div>
</body>

</html>
