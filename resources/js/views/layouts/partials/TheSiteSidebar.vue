<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <div class="side-nav">
        <v-collapse accordion>
          <!-- supplier -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Supplier
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Supplier
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Supplier
            </router-link>
          </v-collapse-item>
          <!-- supplier -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Customers
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Customers
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Customers
            </router-link>
          </v-collapse-item>
          <!-- Categories  -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Categories
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Categories
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Categories
            </router-link>
          </v-collapse-item>
          <!-- Products -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Products
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Products
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Products
            </router-link>
          </v-collapse-item>
          <!-- Purchase -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Purchase
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Purchase
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Purchase
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Return Purchase
            </router-link>
          </v-collapse-item>
          <!-- Stock -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Stock
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Stock
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Stock
            </router-link>
          </v-collapse-item>
          <!-- Sell -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Sell
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Sell
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Sells
            </router-link>
          </v-collapse-item>
          <!-- Expense  -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Expense
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Expense Category
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Add Expense
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Expense
            </router-link>
          </v-collapse-item>
          <!-- Products -->
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title">
              <i class="icon-fa icon-fa-dashboard" />Staff
              <span class="icon-fa arrow icon-fa-fw" />
            </a>
            <router-link to="/admin/dashboard/basic">
              Add Staff
            </router-link>
            <router-link to="/admin/dashboard/basic">
              Manage Staff
            </router-link>
          </v-collapse-item>
        </v-collapse>
      </div>
    </div>
  </div>
</template>
