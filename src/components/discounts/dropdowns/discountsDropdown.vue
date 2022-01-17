<template>
  <V-Dropdown
    class="is-pushed-mobile"
    icon="feather:more-vertical"
    spaced
    right
  >
    <template #content>
     <!--  <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>View</span>
          <span>View project details</span>
        </div>
      </a> -->

      <router-link :to="{ name: 'settings-discounts-edit', query:{id:1} }" role="menuitem" href="#"  class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>Edit</span>
          <span>Edit discount</span>
        </div>
      </router-link>

      <!-- <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-add-files"></i>
        </div>
        <div class="meta">
          <span>New Task</span>
          <span>Add a new task</span>
        </div>
      </a> -->

      <!-- <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from list</span>
        </div>
      </a> -->
    </template>
  </V-Dropdown>
</template>
