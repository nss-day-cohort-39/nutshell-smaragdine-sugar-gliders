import { SignInList } from "./login/SignInList.js";
import "./sessionStorage.js";
import "./user/userProvider.js";
import "./registration/RegisterDialog.js";
import "./registration/SignUpButton.js";
import "./registration/CloseDialogButton.js";
import { ArticleDialogButton } from "./articles/ArticleDialogButton.js";
import "./articles/ArticleDialog.js"
import "./events/EventDialogButton.js"
import { renderNavigation } from "./navigation/Navigation.js";
import { UserCheck } from "./AppController.js";
import "./friends/AddFriendButton.js"
import "./friends/FriendDialog.js"
import './navigation/LogoutButton.js'

renderNavigation()
SignInList()
ArticleDialogButton()
UserCheck()


