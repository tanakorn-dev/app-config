var express = require('express');
var router = express.Router();

router.get('/shelf', function(req, res, next) {

  var categoryPath = req.protocol + "://" + req.get("host") + "/image/category"
  var adsPath = req.protocol + "://" + req.get("host") + "/image/ads"
  var partnerPath = req.protocol + "://" + req.get("host") + "/image/partner"
  var productPath = req.protocol + "://" + req.get("host") + "/image/product"

  res.status(200).json(
    { 
      "success": true,
      "shelf": [
        {
            "type": "categoty",
            "title": "",
            "data": [
                {
                    "name": "Category 01",
                    "image": categoryPath + "/c01.png"
                },
                {
                    "name": "Category 02",
                    "image": categoryPath + "/c02.png"
                },
                {
                    "name": "Category 03",
                    "image": categoryPath + "/c03.png"
                },
                {
                    "name": "Category 04",
                    "image": categoryPath + "/c04.png"
                },
                {
                    "name": "Category 05",
                    "image": categoryPath + "/c05.png"
                },
                {
                    "name": "Category 06",
                    "image": categoryPath + "/c06.png"
                },
                {
                    "name": "Category 07",
                    "image": categoryPath + "/c07.png"
                },
                {
                    "name": "Category 08",
                    "image": categoryPath + "/c08.png"
                },
                {
                    "name": "Category 09",
                    "image": categoryPath + "/c09.png"
                },
                {
                    "name": "Category 10",
                    "image": categoryPath + "/s01.png"
                },
                {
                    "name": "Category 11",
                    "image": categoryPath + "/s02.png"
                },
                {
                    "name": "Category 12",
                    "image": categoryPath + "/s03.png"
                },
                {
                    "name": "Category 13",
                    "image": categoryPath + "/s04.png"
                },
                {
                    "name": "Category 14",
                    "image": categoryPath + "/s05.png"
                }
            ]
        },
        {
            "type": "for_you",
            "title": "For You",
            "data": [
                {
                    "title": "เอโร่ สันนอกหมูสไลซ์แช่แข็ง 1000 กรัม",
                    "image": productPath + "/p01.jpg",
                    "category": "Category 01",
                    "price": 145.00,
                    "ratting": "5.0"
                },
                {
                    "title": "เอโร่ สามชั้นหมูสไลซ์แช่แข็ง 200 กรัม x 5 ถุง",
                    "image": productPath + "/p02.jpg",
                    "category": "Category 01",
                    "price": 270.00,
                    "ratting": "5.0"
                },
                {
                    "title": "เอโร่ เนื้อเป็ดสไลซ์แช่แข็ง 1 กิโลกรัม",
                    "image": productPath + "/p03.jpg",
                    "category": "Category 01",
                    "price": 199.00,
                    "ratting": "5.0"
                },
                {
                    "title": "พีเอสฟู้ดส์ สันคอหมูสไลซ์แช่แข็ง 1000 กรัม",
                    "image": productPath + "/p04.jpg",
                    "category": "Category 01",
                    "price": 199.00,
                    "ratting": "5.0"
                },
                {
                    "title": "ซีพี สันคอหมูชาบู แช่แข็ง 1000 กรัม",
                    "image": productPath + "/p05.jpg",
                    "category": "Category 01",
                    "price": 219.00,
                    "ratting": "5.0"
                }
            ]
        },
        {
            "type": "ads",
            "title": "",
            "data": [
                {
                    "image": adsPath + "/facebook-advertising.png",
                    "link": ""
                }
            ]
        },
        {
            "type": "partner",
            "title": "Partner",
            "data": [
                {
                    "name": "True",
                    "image": partnerPath + "/true.png"
                },
                {
                    "name": "AIS",
                    "image": partnerPath + "/ais.png"
                },
                {
                    "name": "DTAC",
                    "image": partnerPath + "/dtac.png"
                },
                {
                    "name": "Lazada",
                    "image": partnerPath + "/lazada.png"
                },
                {
                    "name": "Shopee",
                    "image": partnerPath + "/shopee.png"
                },
                {
                    "name": "JD Cental",
                    "image": partnerPath + "/jd.png"
                },
                {
                    "name": "CP Freshmart",
                    "image": partnerPath + "/cp.png"
                },
                {
                    "name": "Tops",
                    "image": partnerPath + "/tops.png"
                }
            ]
        }
      ]
    }
  );
});

module.exports = router;
