<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <div class="side-nav">
        <v-collapse accordion>
          <!-- supplier -->
          <v-collapse-item active-url="/dashboard/supplier">
            <a slot="item-title">
              <i class="icon-fa icon-fa-address-card" />Supplier
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/supplier/add">
              Add Supplier
            </router-link>
            <router-link to="/dashboard/supplier/manage">
              Manage Supplier
            </router-link>
          </v-collapse-item>
          <!-- supplier -->
          <v-collapse-item active-url="/dashboard/customer">
            <a slot="item-title">
              <i class="icon-fa icon-fa-address-book" />Customers
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/customer/add">
              Add Customers
            </router-link>
            <router-link to="/dashboard/customer/manage">
              Manage Customers
            </router-link>
          </v-collapse-item>
          <!-- Categories  -->
          <v-collapse-item active-url="/dashboard/category">
            <a slot="item-title"  href="#">
              <i class="icon-fa icon-fa-qrcode" />Categories
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/category/add">
              Add Categories
            </router-link>
            <router-link to="/dashboard/category/manage">
              Manage Categories
            </router-link>
          </v-collapse-item>
          <!-- Products -->
          <v-collapse-item active-url="/dashboard/product">
            <a slot="item-title">
              <i class="icon-fa icon-fa-cubes" />Products
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/product/add">
              Add Products
            </router-link>
            <router-link to="/dashboard/product/manage">
              Manage Products
            </router-link>
          </v-collapse-item>
          <!-- Purchase -->
          <v-collapse-item active-url="/dashboard/Purchase">
            <a slot="item-title">
              <i class="icon-fa icon-fa-cart-plus" />Purchase
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/purchase/add">
              Add Purchase
            </router-link>
            <router-link to="/dashboard/purchase/manage">
              Manage Purchase
            </router-link>
            <router-link to="/dashboard/basic">
              Return Purchase
            </router-link>
          </v-collapse-item>
          <!-- Stock -->
          <v-collapse-item active-url="/dashboard/stock">
            <a slot="item-title">
              <i class="icon-fa icon-fa-tasks" />Stock
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/stock/add">
              Add Stock
            </router-link>
            <router-link to="/dashboard/stock/manage">
              Manage Stock
            </router-link>
          </v-collapse-item>
          <!-- Sell -->
          <v-collapse-item active-url="/dashboard/sell">
            <a slot="item-title">
              <i class="icon-fa icon-fa-arrow-circle-up" />Sell
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/sell/add">
              Add Sell
            </router-link>
            <router-link to="/dashboard/sell/manage">
              Manage Sells
            </router-link>
          </v-collapse-item>
          <!-- Expense  -->
          <v-collapse-item active-url="/dashboard/expense">
            <a slot="item-title">
              <i class="icon-fa icon-fa-minus-circle" />Expense
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/expense">
              Expense Category
            </router-link>
            <router-link to="/dashboard/expense/add">
              Add Expense
            </router-link>
            <router-link to="/dashboard/expense/manage">
              Manage Expense
            </router-link>
          </v-collapse-item>
          <!-- Products -->
          <v-collapse-item active-url="/dashboard/staff">
            <a slot="item-title">
              <i class="icon-fa icon-fa-user-circle" />Staff
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/dashboard/staff/add">
              Add Staff
            </router-link>
            <router-link to="/dashboard/staff/manage">
              Manage Staff
            </router-link>
          </v-collapse-item>
        </v-collapse>
      </div>
    </div>
  </div>
</template>
