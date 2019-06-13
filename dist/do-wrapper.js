"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}(),_requestHelper=require("./request-helper"),_requestHelper2=_interopRequireDefault(_requestHelper);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var DigitalOcean=function(){function a(e,t){_classCallCheck(this,a),this.perPage=t,this.requestHelper=new _requestHelper2.default(e)}return _createClass(a,[{key:"_handleRequest",value:function(e,t){return this.requestHelper.request(e,t)}},{key:"account",value:function(e){return this._handleRequest({actionPath:"account"},e)}},{key:"accountGetActions",value:function(e,t){var a={actionPath:"actions",key:"actions",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"accountGetAction",value:function(e,t){var a={actionPath:"actions/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"accountGetKeys",value:function(e,t){var a={actionPath:"account/keys",key:"ssh_keys",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"accountAddKey",value:function(e,t){var a={actionPath:"account/keys",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"accountGetKeyById",value:function(e,t){var a={actionPath:"account/keys/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"accountGetKeyByFingerprint",value:function(e,t){var a={actionPath:"account/keys/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"accountRenameKey",value:function(e,t,a){var n={actionPath:"account/keys/"+encodeURIComponent(e),method:"PUT",body:{name:t}};return this._handleRequest(n,a)}},{key:"accountDeleteKey",value:function(e,t){var a={actionPath:"account/keys/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"cdnEndpointCreate",value:function(e,t,a){var n={actionPath:"cdn/endpoints",method:"POST",body:{origin:e,ttl:t}};return this._handleRequest(n,a)}},{key:"cdnEndpointGet",value:function(e,t){var a={actionPath:"cdn/endpoints/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"cdnEndpointGetAll",value:function(e,t){var a={actionPath:"/cdn/endpoints",key:"endpoints",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"cdnEndpointUpdate",value:function(e,t,a){var n={actionPath:"cdn/endpoints/"+encodeURIComponent(e),method:"PUT",body:{ttl:t}};return this._handleRequest(n,a)}},{key:"cdnEndpointDelete",value:function(e,t){var a={actionPath:"cdn/endpoints/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"cdnEndpointPurgeCache",value:function(e,t,a){var n={actionPath:"cdn/endpoints/"+encodeURIComponent(e)+"/cache",method:"DELETE",body:{files:t}};return this._handleRequest(n,a)}},{key:"dropletsGetAll",value:function(e,t){var a={actionPath:"droplets",key:"droplets",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"dropletsGetKernels",value:function(e,t,a){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/kernels",key:"kernels",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"dropletsGetSnapshots",value:function(e,t,a){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/snapshots",key:"snapshots",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"dropletsGetBackups",value:function(e,t,a){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/backups",key:"backups",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"dropletsGetActions",value:function(e,t,a){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/actions",key:"actions",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"dropletsCreate",value:function(e,t){var a={actionPath:"droplets",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"dropletsGetById",value:function(e,t){var a={actionPath:"droplets/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"dropletsDelete",value:function(e,t){var a={actionPath:"droplets/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"dropletsGetNeighbors",value:function(e,t){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/neighbors"};return this._handleRequest(a,t)}},{key:"dropletsGetNeighborsReport",value:function(e){return this._handleRequest({actionPath:"reports/droplet_neighbors"},e)}},{key:"dropletsGetUpgrades",value:function(e){return this._handleRequest({actionPath:"droplet_upgrades"},e)}},{key:"dropletsRequestAction",value:function(e,t,a){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"dropletsGetAction",value:function(e,t,a){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/actions/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"domainsGetAll",value:function(e,t){var a={actionPath:"domains",key:"domains",qs:{tag_name:e&&e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"domainsCreate",value:function(e,t,a){var n={actionPath:"domains",method:"POST",body:{name:e,ip_address:t}};return this._handleRequest(n,a)}},{key:"domainsGet",value:function(e,t){var a={actionPath:"domains/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"domainsDelete",value:function(e,t){var a={actionPath:"domains/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"domainRecordsGetAll",value:function(e,t,a){var n={actionPath:"domains/"+encodeURIComponent(e)+"/records",key:"domain_records",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"domainRecordsCreate",value:function(e,t,a){var n={actionPath:"domains/"+encodeURIComponent(e)+"/records",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"domainRecordsGet",value:function(e,t,a){var n={actionPath:"domains/"+encodeURIComponent(e)+"/records/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"domainRecordsUpdate",value:function(e,t,a,n){var o={actionPath:"domains/"+encodeURIComponent(e)+"/records/"+encodeURIComponent(t),method:"PUT",body:a};return this._handleRequest(o,n)}},{key:"domainRecordsDelete",value:function(e,t,a){var n={actionPath:"domains/"+encodeURIComponent(e)+"/records/"+encodeURIComponent(t),method:"DELETE"};return this._handleRequest(n,a)}},{key:"regionsGetAll",value:function(e,t){var a={actionPath:"regions",key:"regions",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"sizesGetAll",value:function(e,t){var a={actionPath:"sizes",key:"sizes",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"imagesGetAll",value:function(e,t){var a={actionPath:"images",key:"images",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1,private:e&&e.private||!1,type:e&&e.type||null},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"imagesGetById",value:function(e,t){var a={actionPath:"images/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"imagesGetBySlug",value:function(e,t){var a={actionPath:"images/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"imagesGetActions",value:function(e,t,a){var n={actionPath:"images/"+encodeURIComponent(e)+"/actions",key:"actions",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"imagesUpdate",value:function(e,t,a){var n={actionPath:"images/"+encodeURIComponent(e),body:{name:t},method:"PUT"};return this._handleRequest(n,a)}},{key:"imagesDelete",value:function(e,t){var a={actionPath:"images/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"imagesRequestAction",value:function(e,t,a){var n={actionPath:"images/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"imagesGetAction",value:function(e,t,a){var n={actionPath:"images/"+encodeURIComponent(e)+"/actions/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"floatingIpsGetAll",value:function(e,t){var a={actionPath:"floating_ips",key:"floating_ips",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"floatingIpsAssignDroplet",value:function(e,t){var a={actionPath:"floating_ips",method:"POST",body:{droplet_id:e}};return this._handleRequest(a,t)}},{key:"floatingIpsAssignRegion",value:function(e,t){var a={actionPath:"floating_ips",method:"POST",body:{region:e}};return this._handleRequest(a,t)}},{key:"floatingIpsGet",value:function(e,t){var a={actionPath:"floating_ips/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"floatingIpsDelete",value:function(e,t){var a={actionPath:"floating_ips/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"floatingIpsRequestAction",value:function(e,t,a){var n={actionPath:"floating_ips/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"floatingIpsGetActions",value:function(e,t,a){var n={actionPath:"floating_ips/"+encodeURIComponent(e)+"/actions",key:"actions",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"floatingIpsGetAction",value:function(e,t,a){var n={actionPath:"floating_ips/"+encodeURIComponent(e)+"/actions/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"tagsCreate",value:function(e,t){var a={actionPath:"tags",method:"POST",body:{name:e}};return this._handleRequest(a,t)}},{key:"tagsDelete",value:function(e,t){var a={actionPath:"tags/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"tagsGet",value:function(e,t){var a={actionPath:"tags/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"tagsGetAll",value:function(e,t){var a={actionPath:"tags",key:"tags",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"tagsAddResources",value:function(e,t,a){var n={actionPath:"tags/"+encodeURIComponent(e)+"/resources",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"tagsDeleteResource",value:function(e,t,a){var n={actionPath:"tags/"+encodeURIComponent(e)+"/resources",method:"DELETE",body:t};return this._handleRequest(n,a)}},{key:"tagsGetDroplets",value:function(e,t,a){var n={actionPath:"droplets",key:"droplets",qs:{per_page:t&&t.per_page||this.perPage,page:t&&t.page||1,tag_name:e},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"tagsDeleteDroplets",value:function(e,t){var a={actionPath:"droplets",method:"DELETE",qs:{tag_name:e}};return this._handleRequest(a,t)}},{key:"tagsRequestAction",value:function(e,t,a){var n={actionPath:"droplets/actions",method:"POST",qs:{tag_name:e},body:t};return this._handleRequest(n,a)}},{key:"volumes",value:function(e,t){var a={actionPath:"volumes",method:"GET",qs:{region:e||""}};return this._handleRequest(a,t)}},{key:"volumesCreate",value:function(e,t){var a={actionPath:"volumes",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"volumesGetById",value:function(e,t){var a={actionPath:"volumes/"+e,method:"GET"};return this._handleRequest(a,t)}},{key:"volumesGetByName",value:function(e,t,a){var n={actionPath:"volumes",method:"GET",qs:{name:e,region:t}};return this._handleRequest(n,a)}},{key:"volumesDeleteById",value:function(e,t){var a={actionPath:"volumes/"+e,method:"DELETE"};return this._handleRequest(a,t)}},{key:"volumesDeleteByName",value:function(e,t,a){var n={actionPath:"volumes",method:"DELETE",qs:{name:e,region:t}};return this._handleRequest(n,a)}},{key:"volumesRequestAction",value:function(e,t,a){var n={actionPath:"volumes/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"loadBalancersCreate",value:function(e,t){var a={actionPath:"load_balancers",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"loadBalancersGetById",value:function(e,t){var a={actionPath:"load_balancers/"+e};return this._handleRequest(a,t)}},{key:"loadBalancers",value:function(e){return this._handleRequest({actionPath:"load_balancers"},e)}},{key:"loadBalancersUpdateById",value:function(e,t,a){var n={actionPath:"load_balancers/"+e,method:"PUT",body:t};return this._handleRequest(n,a)}},{key:"loadBalancersDelete",value:function(e,t){var a={actionPath:"load_balancers/"+e,method:"DELETE"};return this._handleRequest(a,t)}},{key:"loadBalancersAddDroplets",value:function(e,t,a){var n={actionPath:"load_balancers/"+e+"/droplets",method:"POST",body:{droplet_ids:t}};return this._handleRequest(n,a)}},{key:"loadBalancersRemoveDroplets",value:function(e,t,a){var n={actionPath:"load_balancers/"+e+"/droplets",method:"DELETE",body:{droplet_ids:t}};return this._handleRequest(n,a)}},{key:"loadBalancersAddForwardingRule",value:function(e,t,a){var n={actionPath:"load_balancers/"+e+"/forwarding_rules",method:"POST",body:{forwarding_rules:t}};return this._handleRequest(n,a)}},{key:"loadBalancersRemoveForwardingRule",value:function(e,t,a){var n={actionPath:"load_balancers/"+e+"/forwarding_rules",method:"DELETE",body:{forwarding_rules:t}};return this._handleRequest(n,a)}},{key:"firewallsCreate",value:function(e,t){var a={actionPath:"firewalls",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"firewallsGetById",value:function(e,t){var a={actionPath:"firewalls/"+e};return this._handleRequest(a,t)}},{key:"firewalls",value:function(e){return this._handleRequest({actionPath:"firewalls"},e)}},{key:"firewallsUpdateById",value:function(e,t,a){var n={actionPath:"firewalls/"+e,method:"PUT",body:t};return this._handleRequest(n,a)}},{key:"firewallsDeleteById",value:function(e,t){var a={actionPath:"firewalls/"+e,method:"DELETE"};return this._handleRequest(a,t)}},{key:"firewallsAddDroplets",value:function(e,t,a){var n={actionPath:"firewalls/"+e+"/droplets",method:"POST",body:{droplet_ids:t}};return this._handleRequest(n,a)}},{key:"firewallsRemoveDroplets",value:function(e,t,a){var n={actionPath:"firewalls/"+e+"/droplets",method:"DELETE",body:{droplet_ids:t}};return this._handleRequest(n,a)}},{key:"firewallsAddTags",value:function(e,t,a){var n={actionPath:"firewalls/"+e+"/tags",method:"POST",body:{tags:t}};return this._handleRequest(n,a)}},{key:"firewallsRemoveTags",value:function(e,t,a){var n={actionPath:"firewalls/"+e+"/tags",method:"DELETE",body:{tags:t}};return this._handleRequest(n,a)}},{key:"firewallsAddRules",value:function(e,t,a){var n={actionPath:"firewalls/"+e+"/rules",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"firewallsRemoveRules",value:function(e,t,a){var n={actionPath:"firewalls/"+e+"/rules",method:"DELETE",body:t};return this._handleRequest(n,a)}},{key:"snapshots",value:function(e){return this._handleRequest({actionPath:"snapshots"},e)}},{key:"snapshotsDroplets",value:function(e){return this._handleRequest({actionPath:"snapshots",qs:{resource_type:"droplet"}},e)}},{key:"snapshotsVolumes",value:function(e){return this._handleRequest({actionPath:"snapshots",qs:{resource_type:"volume"}},e)}},{key:"snapshotsGetById",value:function(e,t){var a={actionPath:"snapshots/"+e};return this._handleRequest(a,t)}},{key:"snapshotsDeleteById",value:function(e,t){var a={actionPath:"snapshots/"+e,method:"DELETE"};return this._handleRequest(a,t)}},{key:"certificates",value:function(e,t){var a={actionPath:"certificates",key:"certificates",qs:{per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"certificatesCreate",value:function(e,t){var a={actionPath:"certificates",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"certificatesGetById",value:function(e,t){var a={actionPath:"certificates/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"certificatesDeleteById",value:function(e,t){var a={actionPath:"certificates/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"databases",value:function(e,t){var a={actionPath:"databases/",qs:{per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"databasesCreate",value:function(e,t){var a={actionPath:"databases",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"databasesGet",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"databasesResize",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/resize",method:"PUT",body:t};return this._handleRequest(n,a)}},{key:"databasesMigrate",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/migrate",method:"PUT",body:{region:t}};return this._handleRequest(n,a)}},{key:"databasesMaintenance",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/maintenance",method:"PUT",body:t};return this._handleRequest(n,a)}},{key:"databasesGetBackups",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e)+"/backups"};return this._handleRequest(a,t)}},{key:"databasesRestore",value:function(e,t){var a={actionPath:"databases",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"databasesDelete",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"databasesCreateReplica",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/replicas",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"databasesGetReplica",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/replicas/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"databasesReplicaGetAll",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e)+"/replicas"};return this._handleRequest(a,t)}},{key:"databasesDeleteReplica",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/replicas/"+encodeURIComponent(t),method:"DELETE"};return this._handleRequest(n,a)}},{key:"databasesCreateUser",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/users",method:"POST",body:{name:t}};return this._handleRequest(n,a)}},{key:"databasesGetUser",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/users/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"databasesUsersGetAll",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e)+"/users"};return this._handleRequest(a,t)}},{key:"databasesDeleteUser",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/users/"+encodeURIComponent(t),method:"DELETE"};return this._handleRequest(n,a)}},{key:"databasesCreateDB",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/dbs",method:"POST",body:{name:t}};return this._handleRequest(n,a)}},{key:"databasesGetDB",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/dbs/"+t};return this._handleRequest(n,a)}},{key:"databasesDeleteDB",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/dbs/"+t,method:"DELETE"};return this._handleRequest(n,a)}},{key:"databasesDBGetAll",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e)+"/dbs"};return this._handleRequest(a,t)}},{key:"databasesCreatePool",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/pools",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"databasesPoolGetAll",value:function(e,t){var a={actionPath:"databases/"+encodeURIComponent(e)+"/pools"};return this._handleRequest(a,t)}},{key:"databasesGetPool",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/pools/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"databasesDeletePool",value:function(e,t,a){var n={actionPath:"databases/"+encodeURIComponent(e)+"/pools/"+encodeURIComponent(t),method:"DELETE"};return this._handleRequest(n,a)}},{key:"kubernetes",value:function(e,t){var a={actionPath:"kubernetes/clusters",key:"kubernetes",qs:{per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"kubernetesCreateCluster",value:function(e,t){var a={actionPath:"kubernetes/clusters",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"kubernetesClusterGet",value:function(e,t){var a={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"kubernetesClusterDelete",value:function(e,t){var a={actionPath:"kubernetes/clusters/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(a,t)}},{key:"kubernetesClusterGetConfig",value:function(e,t){var a={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/kubeconfig"};return this._handleRequest(a,t)}},{key:"kubernetesNodePools",value:function(e,t,a){var n={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/node_pools",key:"kubernetes",qs:{per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(n,a)}},{key:"kubernetesNodePoolGet",value:function(e,t,a){var n={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/node_pools/"+encodeURIComponent(t)};return this._handleRequest(n,a)}},{key:"kubernetesNodePoolAdd",value:function(e,t,a){var n={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/node_pools",method:"POST",body:t};return this._handleRequest(n,a)}},{key:"kubernetesNodePoolUpdate",value:function(e,t,a,n){var o={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/node_pools/"+encodeURIComponent(t),method:"PUT",body:a};return this._handleRequest(o,n)}},{key:"kubernetesNodePoolDelete",value:function(e,t,a){var n={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/node_pools/"+encodeURIComponent(t),method:"DELETE"};return this._handleRequest(n,a)}},{key:"kubernetesNodesRecycle",value:function(e,t,a){var n={actionPath:"kubernetes/clusters/"+encodeURIComponent(e)+"/node_pools/"+encodeURIComponent(t)+"/recycle",method:"POST"};return this._handleRequest(n,a)}},{key:"kubernetesAvailability",value:function(e){return this._handleRequest({actionPath:"kubernetes/options"},e)}},{key:"projects",value:function(e,t){var a={actionPath:"projects",key:"projects",qs:{per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(a,t)}},{key:"projectsCreate",value:function(e,t){var a={actionPath:"projects",method:"POST",body:e};return this._handleRequest(a,t)}},{key:"projectsUpdate",value:function(e,t,a){var n={actionPath:"projects/"+encodeURIComponent(e),method:"PUT",body:t};return this._handleRequest(n,a)}},{key:"projectsPatch",value:function(e,t,a){var n={actionPath:"projects/"+encodeURIComponent(e),method:"PATCH",body:t};return this._handleRequest(n,a)}},{key:"projectsGet",value:function(e,t){var a={actionPath:"projects/"+encodeURIComponent(e)};return this._handleRequest(a,t)}},{key:"projectsGetDefault",value:function(e){return this._handleRequest({actionPath:"projects/default"},e)}},{key:"projectsUpdateDefault",value:function(e,t){var a={actionPath:"projects/default",method:"PUT",body:e};return this._handleRequest(a,t)}},{key:"projectsPatchDefault",value:function(e,t){var a={actionPath:"projects/default",method:"PATCH",body:e};return this._handleRequest(a,t)}}]),a}();exports.default=DigitalOcean;