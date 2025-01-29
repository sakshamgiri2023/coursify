 const {Schema, default: mongoose } = require("mongoose");
 

 const userSchema = Schema({

 });

 const adminSchma = Schema({

 });
 const courseSchma = Schema({

 });

 const purchaseSchma = Schema({

 });

 const userModule = mongoose.Module("user", userSchema);
 const adminModule = mongoose.Model("admin", adminSchma);
 const courseModule = mongoose.Model("course", courseSchma);
 const purchaseModule = mongoose.Model("purchase", purchaseSchma);

 