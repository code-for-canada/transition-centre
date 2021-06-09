<template>
  <form id="account-view-edit-container">
    <div class="row mrgn-tp-lg mrgn-bttm-lg">
      <div class="col-xs-12">
        <router-link to="/schedule" class="btn btn-default">Edit account information</router-link>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="full-name-edit" class="mrgn-bttm-0">First & last name:</label>
        <input id="full-name-edit" type="text" class="form-control" value="Matthew Smith" readonly/>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="preferred-name-edit" class="mrgn-bttm-0">Preferred name:</label>
        <input id="preferred-name-edit" type="text" class="form-control"/>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="phone-number-edit" class="mrgn-bttm-0">Phone number:</label>
        <input id="phone-number-edit" type="text" class="form-control"/>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="address-edit" class="mrgn-bttm-0">Address:</label>
        <input id="address-edit" type="text" class="form-control"/>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="email-address-edit" class="mrgn-bttm-0">Email address:</label>
        <input id="email-address-edit" type="text" class="form-control"/>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="preferred-language" class="mrgn-bttm-0">Preferred language:</label>
        <div id="preferred-language">
        <div>Written: 
          <input id="preferred-language-written-edit" type="text" class="form-control"/>
        </div>
        <div>Spoken: 
          <input id="preferred-language-spoken-edit" type="text" class="form-control"/>
        </div>
        </div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="communications-preferences-edit" class="mrgn-bttm-0">Communications preferences:</label>
        <div id="communications-preferences-edit">
          <div>Email notifications (recommended): 
            <input id="communications-preferences-edit-field" type="text" class="form-control"/>
          </div>
          <div>
            <i>
            Note: Email notifications must be turned on to receive a notification that there has been activity on your account.
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <router-link to="/schedule" class="btn btn-default">Edit account information</router-link>
      </div>
    </div>
  </form>
</template>
