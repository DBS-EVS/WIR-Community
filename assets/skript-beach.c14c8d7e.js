import"https://unpkg.com/@workadventure/scripting-api-extra@^1";var o=void 0,e=!1,t="https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u",u="https://www.youtube-nocookie.com/embed/36YnV9STBqc?autoplay=1";function n(){o!==void 0&&(o.close(),o=void 0)}var a="tutorial",p="feedback",i="musik";WA.room.onEnterZone(a,()=>{WA.nav.goToPage("https://dbsw.sharepoint.com/")});WA.room.onLeaveZone(a,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(p,()=>{o=WA.ui.openPopup("popUpFeedback","Hier kannst du Feedback abgeben.",[{label:"Feedback",callback:r=>{WA.nav.openCoWebSite(t),e=!0,n()}}])});WA.room.onLeaveZone(p,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(i,()=>{o=WA.ui.openPopup("popUpMusik","Ein wenig Musik?!",[{label:"Her damit!",callback:r=>{WA.nav.openCoWebSite(u,!1,"autoplay; encrypted-media"),e=!0,n()}}])});WA.room.onLeaveZone(i,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});
