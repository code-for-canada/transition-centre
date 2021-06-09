<template>
  <div id="account-view-container">
    <div class="row mrgn-tp-lg mrgn-bttm-lg">
      <div class="col-xs-12">
        <router-link to="/schedule" class="btn btn-default">Edit account information</router-link>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="full-name" class="mrgn-bttm-0">First & last name:</label>
        <div id="full-name">Matthew Smith</div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="preferred-name" class="mrgn-bttm-0">Preferred name:</label>
        <div id="preferred-name">Matt</div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="phone-number" class="mrgn-bttm-0">Phone number:</label>
        <div id="phone-number">613-445-9876</div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="address" class="mrgn-bttm-0">Address:</label>
        <div id="address">44 Mt Hope Rd, Petawawa, ON K8H 3P1</div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="email-address" class="mrgn-bttm-0">Email address:</label>
        <div id="email-address">matt.smith22@gmail.com</div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="preferred-language" class="mrgn-bttm-0">Preferred language:</label>
        <div id="preferred-language">
        <div>Written: 
          <span id="preferred-language-written">
          English
          </span>
        </div>
        <div>Spoken: 
          <span id="preferred-language-spoken">
          English
          </span>
        </div>
        </div>
      </div>
    </div>
    <div class="row mrgn-bttm-lg">
      <div class="col-xs-12">
        <label for="communications-preferences" class="mrgn-bttm-0">Communications preferences:</label>
        <div id="communications-preferences">
          <div>Email notifications (recommended): 
            <span>
            On
            </span>
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
  </div>
</template>
