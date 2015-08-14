App = Ember.Application.create({
});

/*
App.ServicesController = Ember.Controller.extend({
	needs: ['calendar']
});

App.CalendarController = Ember.Calendar.CalendarController.extend({
});
*/  

var apiHost = "http://localhost:3000";

var HumanDate = {
  deserialize: function(string) {
    if (!string) { return null; }
    return moment(string).format("LL");
  },
  serialize: function (date) {
    if (!date) { return null; }
    return date.toISOString();
  },
  isEqual: function(obj1, obj2) {
    if (obj1 instanceof Date) { obj1 = this.serialize(obj1); }
    if (obj2 instanceof Date) { obj2 = this.serialize(obj2); }
    return obj1 === obj2;
  }
};

App.ApplicationController = Ember.Controller.extend({
	isEnabled: {
		service: false,
		documents: false, 
		payments: true,
		notifications: false,
		search: false,
		history: false
	}
});    


App.Router.map(function(){
	this.resource('home', { path: '/' });
	this.resource('buildings', { path: '/buildings' });
	this.resource('building', { path: '/building/:building_id' },
		function(){
			this.route("edit");
			this.route("notes");
			this.resource('unit', { path: '/unit/:unit_id' },
				function(){
					this.route("edit");
					this.route("notes");
				}
			);
		}
	);



	this.resource('tenants', { path: '/tenants' });
	this.resource('tenant', { path: '/tenant/:tenant_id' }, 
		function(){
			this.route("edit");
			this.route("notes");
		}
	);

	this.resource('corporations', { path: '/corporations' });
	this.resource('corporation', { path: '/corporation/:corporation_id' }, 
		function(){
			this.route("edit");
			this.route("notes");
		}
	);

	this.resource('payments', { path: '/payments' });
	this.resource('services', { path: '/services' });
	this.resource('documents', { path: '/documents' });
	this.resource('lease', { path: '/lease' });
});  


var attr = Ember.attr;






//Tenant
App.Models = {};


//Lease
App.Models.Lease = Ember.Model.extend({
	id: attr(),
	tenant_id:attr(),
	start_date:attr(HumanDate),
	end_date:attr(HumanDate),
	monthly_rental_cost:attr(),
	required_deposit_amount: attr(),
	status: attr(),
	first_month_rent_required:attr(),
	last_month_rent_required:attr(),
	fuel_adjustment:attr(),
	mci_improvement:attr(),
	estate_tax: attr(),
	water_charges:attr(),
	sprinkler: attr(),
	signed_date:attr(),
	rent_type:attr(),
	monthly_total: attr()
});


App.Models.Tenant = Ember.Model.extend({
	id: attr(),
	first_name: attr(),
	last_name: attr(),
	main_telephone_number: attr(),
	address_street:attr(),
	address_city:attr(),
	address_state:attr(),
	address_postal_code:attr(),
	main_telephone_number:attr(),
	alt_telephone_number:attr(),
	lease: Ember.hasMany('App.Models.Lease', {key:'lease', embedded:true})

});

App.Models.Tenant.url = apiHost + "/tenant";
App.Models.Tenant.adapter = Ember.RESTAdapter.create();

App.TenantsRoute  = Ember.Route.extend({
  model: function() {
    return App.Models.Tenant.findAll();
  }
}); 

App.TenantRoute  = Ember.Route.extend({
  model: function(params) {
  	var tenant = App.Models.Tenant.find(params.tenant_id);
  	tenant.reload();
    return tenant;
  } 
}); 

  

//Corporation
App.Models.Corporation = Ember.Model.extend({
	id: attr(),
	title: attr(),
	address_street: attr(),
	incorporation_date: attr()
});

App.Models.Corporation.url = apiHost + "/corporation";
App.Models.Corporation.adapter = Ember.RESTAdapter.create();

App.CorporationsRoute  = Ember.Route.extend({
  model: function() {
    return App.Models.Corporation.findAll();
  }
}); 

App.CorporationRoute  = Ember.Route.extend({
  model: function(params) {
    return App.Models.Corporation.find(params.corporation_id);
  }
}); 




//Unit
App.Models.Unit = Ember.Model.extend({
	id: attr(),
	name: attr(),
	square_footage: attr(),
	number_of_bedrooms: attr(),
	number_of_bathrooms: attr(),
	type: attr(),
	floor_number: attr(),
	building_id: attr()
});

App.Models.Unit.url = apiHost + "/unit";
App.Models.Unit.adapter = Ember.RESTAdapter.create();

App.UnitRoute  = Ember.Route.extend({
  model: function() {
    return App.Models.Unit.findAll();
  }
}); 

App.UnitRoute  = Ember.Route.extend({
  model: function(params) {
    return App.Models.Unit.find(params.unit_id);
  }
}); 




//Building
App.Models.Building = Ember.Model.extend({
	id: attr(),
	name: attr(),
	address_street: attr(),
	address_city: attr(),
	address_state: attr(),
	address_postal_code: attr(),
	acquisition_date: attr(),
	building_type: attr(),
	number_of_units: attr(),
	number_of_floors: attr(),
	lot_number:attr(),
	block_number:attr(),
	unit: Ember.hasMany('App.Models.Unit', {key:'unit', embedded:true})
});

App.Models.Building.url = apiHost + "/building";
App.Models.Building.adapter = Ember.RESTAdapter.create();

App.BuildingsRoute  = Ember.Route.extend({
  model: function() {
    return App.Models.Building.findAll();
  }
}); 

App.BuildingRoute  = Ember.Route.extend({
  model: function(params) {
    var building =  App.Models.Building.find(params.building_id);
    building.reload();
    return building; 
  }
}); 

      




/*
App.TenantBuildingHistory = DS.Model.extend({
	tenantId: DS.attr('int'),
	buildingId: DS.attr('int'),
	startDate: DS.attr('date'),
	endDate: DS.attr('date'),
	active: DS.attr('boolean')
});

App.TenantPaymentHistory = DS.Model.extend({
	tenantId: DS.attr('int'),
	amount: DS.attr('int'),
	date: DS.attr('date')
});

App.TenantBill = DS.Model.extend({
	tenantId: DS.attr('int'),
	amountDue: DS.attr('int'),
	paymentFrequency: DS.attr('int')	
});
*/

