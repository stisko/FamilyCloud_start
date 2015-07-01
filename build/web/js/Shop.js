function getShoppingList() {

    
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else
    {
        
        //sending selected country to servlet
        var url = "controller_servl?event=SHOPP";
        xmlHttp.onreadystatechange = shoopinglist_return

        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)
    }
}


function shoopinglist_return()
{

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete")
    {


        var text = xmlHttp.responseText;

        document.getElementById("newpage").innerHTML = text;


    }

}



function insertShoppitem(oForm) {

    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else

    {
        
         var InvForm = document.forms.formaddshop;
        var SelBranchVal = "";
        var x = 0;
        var count=0;
        
        var temp=InvForm.assignedToShop.length;
        for (x=0;x<InvForm.assignedToShop.length;x++)
         {
            if(InvForm.assignedToShop[x].selected )
            {
                if(temp==1){
                    
                    SelBranchVal = InvForm.assignedToShop[x].value;
                }else{
                    
                    count=count+1;
                    
                    if(count==1){
                        SelBranchVal = InvForm.assignedToShop[x].value + SelBranchVal ;
                        
                    }else{
                        
                        SelBranchVal = InvForm.assignedToShop[x].value + "," + SelBranchVal ;
                        
                    }
                    
                    
                }
               
             //alert(InvForm.kb[x].value);
             
            }
         }
         
        
        
        
        
       // alert(data.length);

        var radios = document.getElementsByName('statusradio');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                status = radios[i].value;
                break;
            }
        }


        var url = "controller_servl?event=InsertShoppItem&title=" + document.getElementById("titleadditem").value
                + "&quantity=" + document.getElementById("quantityadditem").value + "&price=" + document.getElementById("priceadditem").value
                + "&status=" + status + "&assignedto=" + SelBranchVal;

        xmlHttp.onreadystatechange = shoopinglist_return

        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)


    }




}


function editShopItem(shitemid) {



    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else
    {

        var url = "controller_servl?event=SHOPDETAILS&itemid=" + shitemid + "&tag=edit";


        xmlHttp.onreadystatechange = editshoopinglist_return
        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)


    }






}

function editshoopinglist_return() {


    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete")
    {


        var text = xmlHttp.responseText;

        document.getElementById("editShop_modal_body").innerHTML = text;


    }



}


function Save_changes_shop(itemID) {

    alert(itemID);
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request");
        return;
    }
    else
    {
       
        
        var InvForm = document.forms.editaskform;
        var SelBranchVal = "";
        var x = 0;
        var count=0;
        
        var temp=InvForm.assignedToShopedit.length;
        
        for (x=0;x<InvForm.assignedToShopedit.length;x++)
         {
            if(InvForm.assignedToShopedit[x].selected )
            {
                if(temp==1){
                    
                    SelBranchVal = InvForm.assignedToShopedit[x].value;
                }else{
                    
                    count=count+1;
                    
                    if(count==1){
                        SelBranchVal = InvForm.assignedToShopedit[x].value + SelBranchVal ;
                        
                    }else{
                        
                        SelBranchVal = InvForm.assignedToShopedit[x].value + "," + SelBranchVal ;
                        
                    }
                    
                    
                }
               
             //alert(InvForm.kb[x].value);
             
            }
         }

         
        var radios = document.getElementsByName('statusradio2');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                status = radios[i].value;
                break;
            }
        }


        var url = "controller_servl?event=UPDATESHOP&itemid=" + itemID + "&title=" + document.getElementById("titleedititem").value
                + "&quantity=" + document.getElementById("quantityedititem").value + "&price=" + document.getElementById("priceedititem").value
                + "&status=" + status + "&assignedto=" + SelBranchVal;




        xmlHttp.onreadystatechange = shoopinglist_return;
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);


    }


}






function deleteShopItem(shitemid){
    
    
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else
    {

        var url = "controller_servl?event=SHOPDETAILS&itemid=" + shitemid + "&tag=delete";


        xmlHttp.onreadystatechange = deleteshoppinglist_return
        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)


    }
    
    
    
    
}


function deleteshoppinglist_return(){
    
    
    
    
     if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete")
    {


        var text = xmlHttp.responseText;

        document.getElementById("deleteShop_modal_body").innerHTML = text;


    }
    
    
    
}


function deleteShopItemItem(shitemid){
    
    
    
    
    xmlHttp = GetXmlHttpObject();
    
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else
    {

        var url = "controller_servl?event=DELETESHOP&itemid=" + shitemid;


        xmlHttp.onreadystatechange = shoopinglist_return;
        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)


    }
    
    
    
}

var asc_descSHOP=false;

function sorttableshopSHOP(sortedTable){
    
    alert("sdfasdf");
    
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else
    {
        
       asc_descSHOP=!asc_descSHOP;
        
       // alert(asc_desc);
        
        var url = "controller_servl?event=SHOPSORT&sortedTag="+sortedTable+"&ssa="+asc_descSHOP;
        xmlHttp.onreadystatechange = sortedfuncTableSHOP;

        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)
        
        
    }
    
    
    
    
}


function sortedfuncTableSHOP(){
    
    
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete")
    {
        //getting response from server(Servlet)

//                    var json = JSON.parse(xmlHttp.responseText);

        var text = xmlHttp.responseText;

        document.getElementById("changedTableSHOP").innerHTML = text;
      

    }
    
    
    
}









var multiSelect = {};
    function antegeia() {      
      var s = document.getElementsByTagName('select');
      for (var i = 0; i < s.length; i++) {
        if (s[i].multiple) {
          var n = s[i].name;
          multiSelect[n] = [];
          for (var j = 0; j < s[i].options.length; j++) {
            multiSelect[n][j] = s[i].options[j].selected;
          }
          s[i].onchange = changeMultiSelect2;
        }
      }
    }
    function changeMultiSelect() {
      var n = this.name;
      for (var i=0; i < this.options.length; i++) {
        if (this.options[i].selected) {
          multiSelect[n][i] = !multiSelect[n][i];
        }
        this.options[i].selected = multiSelect[n][i];
      }
    }
    window.onload = init;