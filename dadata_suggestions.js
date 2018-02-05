function join(arr /*, separator */) {
    var separator = arguments.length > 1 ? arguments[1] : ", ";
    return arr.filter(function(n){return n}).join(separator);
}

function geoQuality(qc_geo) {
    var localization = {
        "0": "точные",
        "1": "ближайший дом",
        "2": "улица",
        "3": "населенный пункт",
        "4": "город"
    };
    return localization[qc_geo] || qc_geo;
}

function geoLink(address) {
    return join(["<a target=\"_blank\" href=\"",
        "https://maps.yandex.ru/?text=",
        address.geo_lat, ",", address.geo_lon, "\">",
        address.geo_lat, ", ", address.geo_lon, "</a>"], "");
}

function showAddress() {
    $("#address").val(join([
        join([address.region],' ',[address.region],' '),
        join([address.area,' ', address.area_type_full], ' '),
        join([address.city,' ', address.settlement], ' '),
        join([address.city_district], " "),
        join([address.street], " "),
        join([address.street_type_full], " "),
        join([address.house_type, address.house], " "),
        join([address.block_type, address.block], " ")
    ])
    );
    alert($("#address").val())
}


function showArea(address) {
    $("#district").val(
        join([address.area, address.area_type_full], " ")
    );
}

function showCity(address) {
    $("#city").val(join([
        address.city, address.settlement
    ]));
}

function showCityType(address) {
    $("#city_type").val(join([
        join([address.city_type_full], " "),
        join([address.settlement_type_full], " ")
    ]));
}
function showDistrict(address) {
    $("#area").val(
        join([address.city_district], " ")
    );
}

function showStreet(address) {
    $("#street").val(
        join([address.street], " ")
    );
}

function showStreetType(address) {
    $("#street_type").val(
        join([address.street_type_full], " ")
    );
}

function showHouse(address) {
    $("#house").val(join([
        join([address.house_type, address.house], " "),
        join([address.block_type, address.block], " ")
    ]));
}

function showGeo(address) {
    if (address.qc_geo != "5") {
        var geo = geoLink(address) + " (" + geoQuality(address.qc_geo) + ")";
        $("#geo").html(geo);
    }
}

function showSelected(suggestion) {
    var address = suggestion.data;
    showAddress(address);
}

$("#address").suggestions({
    token: "2f0e6e232b29d7fefdf500bdf69b83a64a0bf9d2",
    type: "ADDRESS",
    count: 5,
    onSelect: showSelected
});