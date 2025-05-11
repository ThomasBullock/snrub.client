<template>
  <div class="p-6 md:p-12 lg:p-20 bg-surface-50 dark:bg-surface-950">
    <ul class="list-none p-0 m-0 flex flex-col gap-6">
      <li
        v-for="user in allUsers"
        :key="user.uid"
        class="bg-surface-0 dark:bg-surface-900 p-6 shadow-sm rounded-2xl"
      >
        <div
          class="border-2 border-dashed border-surface rounded-2xl p-6 bg-surface-50 dark:bg-surface-800"
        >
          <span class="mr-2">Name: {{ user.name }}</span>
          <span class="mr-2">Email: {{ user.email }}</span>
          <span>Role: {{ user.role }}</span>
        </div>
      </li>
      <Divider class="!my-0" />
    </ul>
  </div>
</template>

<script setup>
import Divider from "primevue/divider";
import { useUsersStore } from "@/stores/users";
const usersStore = useUsersStore();

const allUsers = usersStore.getAllUsers;
</script>

<style lang="scss" scoped></style>
