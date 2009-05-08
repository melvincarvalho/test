IniRead,  createuri, foaf.ini, core, createuri, http://foaf.me
IniWrite, %createuri%, foaf.ini, core, createuri


Gui, Add, GroupBox, x0 y0 w320 h80 , Create Account
Gui, Add, Edit, vNick x71 y20 w230 h20 , johnsmith
Gui, Add, Text, x11 y20 w50 h20 , Nickname

Gui, Add, Button, gCreate x+25 y+6 Default, Create
Gui, Add, Button, gSubmit X+8, Secure
Gui, Add, Button, X+8 gConfigure, Configure

Gui, Show, x131 y91 h83 w321, Create Account

Return

Create:
Gui, Submit, NoHide
  Run http://foaf.me/%Nick%
Return

Submit:
Gui, Submit
  Run https://foaf.me/cert.php?foaf=http://foaf.me/%Nick%
Return

Configure:
Gui, Submit
  Run foaf.ini
Return

GuiClose:
ExitApp