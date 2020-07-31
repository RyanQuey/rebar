(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1353:function(e,n,t){"use strict";t.r(n);var a,o=t(1376),l=t(1384),i=t(1378),s=t(1377),r=t(1338),u=t(5),d=t(137),c=t(0),p=t.n(c),m=t(11),T=t(1383),D=t(1380),g=t(19);const k=void 0!==a?a:a=t(766);var _,h={commit:function(e,n,t,a,o){return Object(m.commitMutation)(e,{mutation:k,variables:{input:{ToDo_Complete:a},status:o},updater(e){const t=e.get(n.id),a=g.ConnectionHandler.getConnection(t,"ToDoList_ToDos",{status:o}),l=e.getRootField("ToDoListUpdateMarkAll").getLinkedRecord("Viewer").getLinkedRecord("ToDos",{status:o}).getLinkedRecords("edges");a.setLinkedRecords(l,"edges")},optimisticUpdater(e){const t=e.get(n.id),l=g.ConnectionHandler.getConnection(t,"ToDoList_ToDos",{status:o});(a&&"active"===o||!a&&"completed"===o)&&l.setLinkedRecords([],"edges")},optimisticResponse(){const e={Viewer:{id:n.id,ToDo_CompletedCount:0},changedToDos:null};return t&&t.edges&&(e.changedToDos=t.edges.filter(({node:e})=>e.ToDo_Complete!==a).map(({node:e})=>({id:e.id,ToDo_Complete:a}))),a?null!=n.ToDo_TotalCount&&(e.Viewer.ToDo_CompletedCount=n.ToDo_TotalCount):e.Viewer.ToDo_CompletedCount=0,{ToDoListUpdateMarkAll:e}}})}},C=t(1328),y=t(1341),F=t(1379),b=t(1373),K=t(734),L=t(1371),V=t(703),f=t.n(V);const v=void 0!==_?_:_=t(767);function S(e,n,t){const a=e.get(n.id),o=t.getValue("ToDo_Complete")?"active":"completed",l=g.ConnectionHandler.getConnection(a,"ToDoList_ToDos",{status:o});l&&g.ConnectionHandler.deleteNode(l,t.getValue("id"))}var M,E={commit:function(e,n,t,a){return Object(m.commitMutation)(e,{mutation:v,variables:{input:{id:t.id,ToDo_Complete:a}},updater(e){const t=e.getRootField("ToDoUpdateStatus");S(e,n,t.getLinkedRecord("ToDo"))},optimisticUpdater(e){const o=e.get(t.id);o.setValue(a,"complete"),S(e,n,o);const l=e.get(n.id),i=l.getValue("ToDo_CompletedCount");null!=i&&l.setValue(i+(a?1:-1),"ToDo_CompletedCount")}})}};const U=void 0!==M?M:M=t(768);function w(e,n,t){const a=e.get(n.id);["any","active","completed"].forEach(e=>{const n=g.ConnectionHandler.getConnection(a,"ToDoList_ToDos",{status:e});n&&g.ConnectionHandler.deleteNode(n,t)})}var x,I={commit:function(e,n,t){return Object(m.commitMutation)(e,{mutation:U,variables:{input:{id:t.id}},updater(e){const t=e.getRootField("ToDoDelete");w(e,n,t.getValue("deletedId"))},optimisticUpdater(e){w(e,n,t.id);const a=e.get(n.id),o=a.getValue("ToDo_TotalCount");null!=o&&a.setValue(o-1,"ToDo_TotalCount");const l=a.getValue("ToDo_CompletedCount");null!=l&&(null!=t.ToDo_Complete?t.ToDo_Complete&&a.setValue(l-1,"ToDo_CompletedCount"):null!=o&&o-1<l&&a.setValue(o-1,"ToDo_CompletedCount"))}})}};const R=void 0!==x?x:x=t(769);var O={commit:function(e,n,t){return Object(m.commitMutation)(e,{mutation:R,variables:{input:{id:n.id,ToDo_Text:t}},optimisticResponse:()=>({ToDoUpdateRename:{ToDo:{id:n.id,ToDo_Text:t}}})})}},A=t(71),P=t(1329),$=t(1340),j=t(1331),N=t(1330),q=t(402);class H extends p.a.Component{constructor(e,n){super(e,n),this._handle_Close=()=>{this.props.handlerClose()},this._handle_OK=()=>{this.props.handlerUpdate({ToDo_Text:this.state.ToDo_Text}),this.props.handlerClose()};const{ToDo_Text:t}=this.props;this.state={ToDo_Text:t}}render(){const{ToDo_Text:e}=this.state;return(p.a.createElement("div",null,p.a.createElement(P.a,{open:this.props.open,onClose:this._handle_Close},p.a.createElement(N.a,null,"ToDo"),p.a.createElement(j.a,null,p.a.createElement(q.a,{label:"To Do",fullWidth:!0,value:e,onChange:e=>this.setState({ToDo_Text:e.target.value})})),p.a.createElement($.a,null,p.a.createElement(A.a,{onClick:this._handle_Close},"Cancel"),p.a.createElement(A.a,{onClick:this._handle_OK,color:"primary"},"OK")))))}}var J,W,z=Object(u.a)(e=>({container:{display:"flex",flexWrap:"wrap"}}))(H);class B extends p.a.Component{constructor(e,n){super(e,n),this._handle_onClickCheckbox=(e,n)=>{const{relay:t,Viewer:a,ToDo:o}=this.props;E.commit(t.environment,a,o,n)},this._handle_Update_Properties=e=>{const{relay:n,ToDo:t}=this.props;O.commit(n.environment,t,e.ToDo_Text)},this._handle_Close_Properties=()=>{this.setState({propertiesIsOpen:!1})},this.handleClickListItem=e=>{this.setState({menuIsOpen:!0,anchorEl:e.currentTarget})},this._handle_Menu_onClick_Edit=e=>{this.setState({menuIsOpen:!1,propertiesIsOpen:!0})},this._handle_Menu_onClick_Delete=e=>{this.setState({menuIsOpen:!1});const{relay:n,Viewer:t,ToDo:a}=this.props;I.commit(n.environment,t,a)},this.handleRequestClose=()=>{this.setState({menuIsOpen:!1})},this.state={anchorEl:void 0,menuIsOpen:!1,propertiesIsOpen:!1}}render(){const{ToDo_Complete:e,ToDo_Text:n}=this.props.ToDo;return(p.a.createElement("div",null,p.a.createElement(y.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu",onClick:n=>this._handle_onClickCheckbox(n,!e)},p.a.createElement(l.a,{checked:e}),p.a.createElement(b.a,{primary:n}),p.a.createElement(F.a,null,p.a.createElement(C.a,{onClick:this.handleClickListItem},p.a.createElement(f.a,null)))),p.a.createElement(K.a,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.menuIsOpen,onClose:this.handleRequestClose},p.a.createElement(L.a,{key:"edit",onClick:e=>this._handle_Menu_onClick_Edit(e)},"Edit"),p.a.createElement(L.a,{key:"delete",onClick:e=>this._handle_Menu_onClick_Delete(e)},"Delete")),p.a.createElement(z,{ToDo_Text:n,handlerUpdate:this._handle_Update_Properties,handlerClose:this._handle_Close_Properties,open:this.state.propertiesIsOpen})))}}var G,Q=Object(m.createFragmentContainer)(B,{Viewer:void 0!==J?J:J=t(770),ToDo:void 0!==W?W:W=t(771)});class X extends p.a.Component{constructor(...e){var n;return n=super(...e),this._handle_onClick_MarkAll=(e,n)=>{const{match:t,relay:a,Viewer:o}=this.props,{status:l}=t.params,i=n;h.commit(a.environment,o,o.ToDos,i,l)},this._handle_onChange=(e,n)=>{const{router:t}=this.props,a=2===n?"/todo/completed":1===n?"/todo/active":"/todo";t.push(a)},n}renderTabs(){const{match:e}=this.props,{status:n}=e.params,t="active"===n?1:"completed"===n?2:0;return p.a.createElement(o.a,{position:"static"},p.a.createElement(T.a,{value:t,onChange:this._handle_onChange},p.a.createElement(D.a,{label:"All"}),p.a.createElement(D.a,{label:"Active"}),p.a.createElement(D.a,{label:"Completed"})))}render(){const{Viewer:e}=this.props,{ToDos:n,ToDo_TotalCount:t,ToDo_CompletedCount:a}=e;return t?p.a.createElement("div",null,this.renderTabs(),p.a.createElement(i.a,{row:!0},p.a.createElement(s.a,{control:p.a.createElement(l.a,{checked:t===a,onChange:this._handle_onClick_MarkAll}),label:"Mark all as complete"})),p.a.createElement(r.a,null,n.edges.map(({node:n})=>p.a.createElement(Q,{key:n.id,Viewer:e,ToDo:n})))):null}}n.default=Object(m.createFragmentContainer)(Object(u.a)(e=>({}))(Object(d.withRouter)(X)),{Viewer:void 0!==G?G:G=t(772)})},766:function(e,n,t){"use strict";const a={fragment:{argumentDefinitions:o=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"ToDoListUpdateMarkAllInput!"},{defaultValue:null,kind:"LocalArgument",name:"status",type:"String!"}],kind:"Fragment",metadata:null,name:"ToDoListUpdateMarkAllMutation",selections:s=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"ToDoListUpdateMarkAllPayload",kind:"LinkedField",name:"ToDoListUpdateMarkAll",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"Viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"status",variableName:"status"}],concreteType:"ToDosConnection",kind:"LinkedField",name:"ToDos",plural:!1,selections:[{alias:null,args:null,concreteType:"ToDosEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ToDo",kind:"LinkedField",name:"node",plural:!1,selections:[l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"ToDo_Complete",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_Text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"ToDo_CompletedCount",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ToDo",kind:"LinkedField",name:"changedToDos",plural:!0,selections:[l,i],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:o,kind:"Operation",name:"ToDoListUpdateMarkAllMutation",selections:s},params:{id:null,metadata:{},name:"ToDoListUpdateMarkAllMutation",operationKind:"mutation",text:"mutation ToDoListUpdateMarkAllMutation(\n  $input: ToDoListUpdateMarkAllInput!\n  $status: String!\n) {\n  ToDoListUpdateMarkAll(input: $input) {\n    Viewer {\n      ToDos(status: $status) {\n        edges {\n          node {\n            id\n            ToDo_Complete\n            ToDo_Text\n          }\n        }\n      }\n      id\n      ToDo_CompletedCount\n    }\n    changedToDos {\n      id\n      ToDo_Complete\n    }\n  }\n}\n"}};var o,l,i,s;a.hash="18b2dc6ec26946a22a0803be1ba1d2f2",e.exports=a},767:function(e,n,t){"use strict";const a={fragment:{argumentDefinitions:o=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"ToDoUpdateStatusInput!"}],kind:"Fragment",metadata:null,name:"ToDoUpdateStatusMutation",selections:i=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"ToDoUpdateStatusPayload",kind:"LinkedField",name:"ToDoUpdateStatus",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"Viewer",plural:!1,selections:[l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_CompletedCount",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ToDo",kind:"LinkedField",name:"ToDo",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"ToDo_Complete",storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:o,kind:"Operation",name:"ToDoUpdateStatusMutation",selections:i},params:{id:null,metadata:{},name:"ToDoUpdateStatusMutation",operationKind:"mutation",text:"mutation ToDoUpdateStatusMutation(\n  $input: ToDoUpdateStatusInput!\n) {\n  ToDoUpdateStatus(input: $input) {\n    Viewer {\n      id\n      ToDo_CompletedCount\n    }\n    ToDo {\n      id\n      ToDo_Complete\n    }\n  }\n}\n"}};var o,l,i;a.hash="05dd206726300c3f5a9866475072d101",e.exports=a},768:function(e,n,t){"use strict";const a={fragment:{argumentDefinitions:o=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"ToDoDeleteInput!"}],kind:"Fragment",metadata:null,name:"ToDoDeleteMutation",selections:[{alias:null,args:l=[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"ToDoDeletePayload",kind:"LinkedField",name:"ToDoDelete",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"Viewer",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"ToDo_TotalCount",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"ToDo_CompletedCount",storageKey:null}],storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"deletedId",storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:o,kind:"Operation",name:"ToDoDeleteMutation",selections:[{alias:null,args:l,concreteType:"ToDoDeletePayload",kind:"LinkedField",name:"ToDoDelete",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"Viewer",plural:!1,selections:[i,s,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},r],storageKey:null}]},params:{id:null,metadata:{},name:"ToDoDeleteMutation",operationKind:"mutation",text:"mutation ToDoDeleteMutation(\n  $input: ToDoDeleteInput!\n) {\n  ToDoDelete(input: $input) {\n    Viewer {\n      ToDo_TotalCount\n      ToDo_CompletedCount\n      id\n    }\n    deletedId\n  }\n}\n"}};var o,l,i,s,r;a.hash="a581035e0f38d5d8ad86368e6420b22c",e.exports=a},769:function(e,n,t){"use strict";const a={fragment:{argumentDefinitions:o=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"ToDoUpdateRenameInput!"}],kind:"Fragment",metadata:null,name:"ToDoUpdateRenameMutation",selections:l=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"ToDoUpdateRenamePayload",kind:"LinkedField",name:"ToDoUpdateRename",plural:!1,selections:[{alias:null,args:null,concreteType:"ToDo",kind:"LinkedField",name:"ToDo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_Text",storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:o,kind:"Operation",name:"ToDoUpdateRenameMutation",selections:l},params:{id:null,metadata:{},name:"ToDoUpdateRenameMutation",operationKind:"mutation",text:"mutation ToDoUpdateRenameMutation(\n  $input: ToDoUpdateRenameInput!\n) {\n  ToDoUpdateRename(input: $input) {\n    ToDo {\n      id\n      ToDo_Text\n    }\n  }\n}\n"}};var o,l;a.hash="5ca316bc08f370bba86945985652a644",e.exports=a},770:function(e,n,t){"use strict";const a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ToDoItem_Viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Viewer",hash:"1a7d80a3304bcbe9332edd571759ed60"};e.exports=a},771:function(e,n,t){"use strict";const a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ToDoItem_ToDo",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_Complete",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_Text",storageKey:null}],type:"ToDo",hash:"b4582da6b8371980f5147d0ea118c859"};e.exports=a},772:function(e,n,t){"use strict";const a={argumentDefinitions:[{kind:"RootArgument",name:"status",type:"String"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["ToDos"]}]},name:"ToDoList_Viewer",selections:[{alias:"ToDos",args:[{kind:"Variable",name:"status",variableName:"status"}],concreteType:"ToDosConnection",kind:"LinkedField",name:"__ToDoList_ToDos_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"ToDosEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ToDo",kind:"LinkedField",name:"node",plural:!1,selections:[o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_Complete",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"ToDoItem_ToDo"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"ToDo_TotalCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ToDo_CompletedCount",storageKey:null},{args:null,kind:"FragmentSpread",name:"ToDoItem_Viewer"}],type:"Viewer"};var o;a.hash="68b5216db9d5b129661a98b5e2476770",e.exports=a}}]);