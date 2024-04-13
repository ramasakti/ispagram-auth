const express = require('express')
const app = express()
const AccessRouter = require('./AccessRouter')
const AuthRouter = require('./AuthRouter')
const MenuRouter = require('./MenuRouter')
const NavbarRouter = require('./NavbarRouter')
const RoleRouter = require('./RoleRouter')
const SectionRouter = require('./SectionRouter')
const SubmenuRouter = require('./SubmenuRouter')
const UserRouter = require('./UserRouter')

app.use(AccessRouter)
app.use(AuthRouter)
app.use(MenuRouter)
app.use(NavbarRouter)
app.use(RoleRouter)
app.use(SectionRouter)
app.use(SubmenuRouter)
app.use(UserRouter)

module.exports = app