var csv = require("csvtojson");
const path = require('path');


exports.get_all = function (req, res) {
	console.log("Inside get_all");
	console.log("PATH::==>" + path.join(__dirname, '../data', 'OP_DTL_OWNRSHP_PGYR2016_P01182019.csv'));
	csv()
		.fromFile(path.join(__dirname, '../data', 'OP_DTL_OWNRSHP_PGYR2016_P01182019.csv'))
		.then(function (jsonArrayObjMain) { //when parse finished, result will be emitted here.
			//var jsonArg = new Array();
			for (index = 0; index < jsonArrayObjMain.length; ++index) {
				var Full_Name = jsonArrayObjMain[index]["Physician_First_Name"].toString().trim()+" "+jsonArrayObjMain[index]["Physician_Middle_Name"].toString().trim()+" "+jsonArrayObjMain[index]["Physician_Last_Name"].toString().trim()
				jsonArrayObjMain[index].Physician_Full_Name = Full_Name.trim();
			}
			res.json(jsonArrayObjMain); // return all todos in JSON format
		});
}