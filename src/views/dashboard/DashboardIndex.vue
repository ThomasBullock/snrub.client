<template>
  <div class="min-h-screen flex relative lg:static bg-surface-50 dark:bg-surface-950">
    <DashboardSidebar @logout="handleLogout" />
    <DashboardDrawer v-model="drawerVisible" @logout="handleLogout" />
    <div class="h-screen flex flex-col relative flex-auto">
      <div
        class="flex justify-between items-center py-4 px-8 bg-surface-0 dark:bg-surface-900 relative lg:static border-b border-surface-200 dark:border-surface-700"
      >
        <div class="flex items-center w-full gap-4">
          <a
            @click="drawerVisible = true"
            class="cursor-pointer flex items-center justify-center lg:hidden text-surface-700 dark:text-surface-100"
          >
            <i class="pi pi-bars text-xl!" />
          </a>
          <IconField icon-position="left" class="w-full sm:w-80">
            <InputIcon
              class="pi pi-search text-base! leading-tight! text-surface-400 dark:text-surface-500"
            />
            <InputText
              type="text"
              placeholder="Search"
              class="w-full border-transparent! bg-transparent! shadow-none!"
            />
          </IconField>
        </div>
        <div class="flex items-center gap-8">
          <i
            class="pi pi-bell text-xl! leading-tight! text-surface-500 dark:text-surface-400 cursor-pointer"
          />
          <img
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/avatar-amyels.png"
            class="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div v-if="isLoading" class="flex justify-center items-center h-full">
        <ProgressSpinner />
      </div>
      <div
        v-else
        class="flex flex-col flex-auto min-h-0 overflow-y-auto bg-surface-0 dark:bg-surface-950"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import ProgressSpinner from "primevue/progressspinner";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import DashboardDrawer from "@/components/dashboard/DashboardDrawer.vue";
import { useUsersStore } from "@/stores/users";
import { useAuthStore } from "@/stores/auth";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useTitle } from "@vueuse/core";
import { useIncidentTypesStore } from "@/stores/incidentTypes";
import { useIncidentReportsStore } from "@/stores/incidentReports";

const title = useTitle();

title.value = "Snrub Corp | Dashboard";

const router = useRouter();
const usersStore = useUsersStore();
const incidentTypesStore = useIncidentTypesStore();
const authStore = useAuthStore();
const incidentReportsStore = useIncidentReportsStore();
const isLoading = ref(false);
const drawerVisible = ref(false);

async function handleLogout() {
  await authStore.logout();
  usersStore.$reset();
  incidentTypesStore.$reset();
  incidentReportsStore.$reset();
  router.push({ name: "Login" });
}

onBeforeMount(async () => {
  isLoading.value = true;
  const requests = [usersStore.fetchUsers(), incidentTypesStore.fetchIncidentTypes()];

  await Promise.all(requests);
  isLoading.value = false;
});
</script>
