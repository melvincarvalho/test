IniRead,  createuri, foaf.ini, core, createuri, http://foaf.me
IniWrite, %createuri%, foaf.ini, core, createuri

IniRead,  certuri, foaf.ini, core, certuri, https://foaf.me/cert.php
IniWrite, %certuri%, foaf.ini, core, certuri


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
  Run %createuri%/%Nick%
  IniWrite, %createuri%/%Nick%, foaf.ini, core, webid
Return

Submit:
Gui, Submit, NoHide
  MsgBox Save the following file in a safe place, and then import into your browser
  Run %certuri%?foaf=%createuri%/%Nick%
Return

Configure:
  MsgBox Change createuri and certuri to run off another server (inc. localally) and restart
  Gui, Submit, NoHide
  Run foaf.ini
Return

GuiClose:
ExitApp