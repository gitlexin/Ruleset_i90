# 此远程订阅用于解决QX任务脚本的cookie获取，仅适用于QX 1.0.10及更高版本，您可在使用后手动将其禁用，以避免无意义的MITM。

hostname = api.m.jd.com, passport.biligame.com


# 京东 cookie
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 哔哩哔哩漫画 Get cookie
^https:\/\/passport\.biligame\.com\/api\/login\/sso.+?version%22%3A%22(3|4|5) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js
