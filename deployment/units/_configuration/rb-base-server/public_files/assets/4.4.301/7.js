(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1363:function(e,n,t){"use strict";t.r(n);var a,o=t(47),l=t(242),i=t(5),s=t(0),d=t.n(s),r=t(11),u=t(400),c=t(35),T=t(19);const m=void 0!==a?a:a=t(773);function g(e,n,t){const a=e.get(n.id);["any","active"].forEach(e=>{const n=T.ConnectionHandler.getConnection(a,"ToDoList_ToDos",{status:e});n&&T.ConnectionHandler.insertEdgeAfter(n,t)})}let D=0;var p,_={commit:function(e,n,t){const a=D++;return Object(r.commitMutation)(e,{mutation:m,variables:{input:{ToDo_Text:t,clientMutationId:`${a}`}},updater(e){const t=e.getRootField("ToDoAdd");g(e,n,t.getLinkedRecord("ToDosEdge"))},optimisticUpdater(e){const o=`client:ToDoAdd:ToDo:${a}`,l=e.create(o,"ToDo");l.setValue(t,"ToDo_Text"),l.setValue(o,"id");const i=e.create(`client:ToDoAdd:ToDosEdge:${a}`,"ToDosEdge");i.setLinkedRecord(l,"node"),g(e,n,i);const s=e.get(n.id),d=s.getValue("ToDo_TotalCount");null!=d&&s.setValue(d+1,"ToDo_TotalCount")}})}};class h extends d.a.Component{constructor(e,n){super(e,n),this._handle_onKeyDown_AddToDo=e=>{if(13===e.keyCode){const{relay:e,Viewer:n}=this.props;_.commit(e.environment,n,this.state.ToDo_Text_New),this.setState({ToDo_Text_New:""})}},this._handle_OnChange=e=>{this.setState({ToDo_Text_New:e.target.value})},this.state={ToDo_Text_New:""}}render(){const{classes:e}=this.props;return(d.a.createElement(c.a,null,d.a.createElement(o.a,{className:e.card},d.a.createElement(l.a,{title:"TO DOs",subheader:"List of TO DOs for user"}),this.props.children,d.a.createElement("div",{style:{marginLeft:4,marginRight:4}}),d.a.createElement(u.a,{label:"What needs to be done?",value:this.state.ToDo_Text_New,fullWidth:!0,onKeyDown:this._handle_onKeyDown_AddToDo,onChange:this._handle_OnChange}))))}}n.default=Object(r.createFragmentContainer)(Object(i.a)(e=>({card:{minWidth:275}}))(h),{Viewer:void 0!==p?p:p=t(774)})},773:function(e,n,t){"use strict";const a={fragment:{argumentDefinitions:o=[{defaultValue:null,kind:"LocalArgument",name:"input"}],kind:"Fragment",metadata:null,name:"ToDoAddMutation",selections:i=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"ToDoAddPayload",kind:"LinkedField",name:"ToDoAdd",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"Viewer",plural:!1,selections:[l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_TotalCount",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ToDosEdge",kind:"LinkedField",name:"ToDosEdge",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"ToDo",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"ToDo_Complete",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_Text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:o,kind:"Operation",name:"ToDoAddMutation",selections:i},params:{cacheID:"7f445659ef8d79c71492386f78775f19",id:null,metadata:{},name:"ToDoAddMutation",operationKind:"mutation",text:"mutation ToDoAddMutation(\n  $input: ToDoAddInput!\n) {\n  ToDoAdd(input: $input) {\n    Viewer {\n      id\n      ToDo_TotalCount\n    }\n    ToDosEdge {\n      __typename\n      cursor\n      node {\n        id\n        ToDo_Complete\n        ToDo_Text\n      }\n    }\n  }\n}\n"}};var o,l,i;a.hash="91b4bedd9baa04b077f5bcb84fb786a1",e.exports=a},774:function(e,n,t){"use strict";const a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ToDoScreen_Viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Viewer",abstractKey:null,hash:"51f13adf0441eb6987038deaeea9998d"};e.exports=a}}]);