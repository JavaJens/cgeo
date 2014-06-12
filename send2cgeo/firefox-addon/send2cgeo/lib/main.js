var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
 
pageMod.PageMod({
  include: ["http://www.geocaching.com/seek/cache_details*", "https://www.geocaching.com/map/*", "http://www.geocaching.com/geocache/*", "http://www.geocaching.com/my/recentlyviewedcaches*", "http://www.geocaching.com/seek/nearest*"],
  contentScriptWhen: "end",
  contentScriptFile: data.url("send2cgeo.user.js")
},
{
  include: ["http://opencaching.pl/viewcache.php*", "http://www.opencaching.nl/viewcache.php*" ],
  contentScriptWhen: "end",
  contentScriptFile: data.url("send2cgeoOcPl.user.js")
},
{
  include: ["http://www.opencaching.de/viewcache.php*"],
  contentScriptWhen: "end",
  contentScriptFile: data.url("send2cgeoOc.user.js")
});
