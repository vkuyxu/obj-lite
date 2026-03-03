<template>
  <div
    class="feature-card"
    :class="{
      'hover-effect': isHovered,
      'feature-card-hover': props.hoverable,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
    @touchstart="handleMouseEnter"
    @touchend="handleMouseLeave"
    @touchmove="handleMouseMove"
  >
    <div
      class="card-header"
      :class="`align-${singleItemAlignClass}`"
      v-if="props.showIcon || props.badgeText || props.title"
    >
      <div
        class="icon-title-container"
        v-if="props.showIcon || props.title || props.icon"
      >
        <span class="icon" v-if="props.showIcon">
          <slot name="icon">⚪</slot>
        </span>
        <span class="icon" v-if="props.icon">
          <slot name="icon">{{ props.icon }}</slot>
        </span>
        <div class="card-title">{{ props.title }}</div>
      </div>
      <div class="badge" v-if="props.badgeText">
        {{ props.badgeText }}
      </div>
    </div>
    <div class="card-content">
      <template v-if="props.details">{{ props.details }}</template>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref, computed } from "vue";
// props
const props = defineProps({
  hoverable: {
    type: Boolean,
    default: false,
  },
  badgeText: {
    type: String,
    default: "",
  },
  badgeColor: {
    type: String,
    default: "white",
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "left", // 'left', 'center', 'right'
    validator: (value) => ["left", "center", "right"].includes(value),
  },
  title: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
});
// ref
const isHovered = ref(false);
const gradientPosition = ref({ x: 0, y: 0 });
// computed
const singleItemAlignClass = computed(() => {
  const validAlignments = ["left", "center", "right"];
  return validAlignments.includes(props.align) ? props.align : "right";
});
// methods
const handleMouseEnter = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  gradientPosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

const handleMouseMove = (event) => {
  if (isHovered.value) {
    const rect = event.currentTarget.getBoundingClientRect();
    gradientPosition.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }
};
</script>

<style scoped>
.feature-card {
  /* width: 300px; */
  padding: 16px;
  border-radius: 12px;
  background-color: #001756;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.feature-card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.card-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  z-index: 2;
}

.icon-title-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-title-container .icon {
  width: 24px;
  height: 24px;
  color: #fff;
  fill: currentColor;
}

.icon-title-container .card-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

.card-header.align-right:has(> :only-child) {
  justify-content: flex-end;
}

.card-header.align-left:has(> :only-child) {
  justify-content: flex-start;
}

.card-header.align-center:has(> :only-child) {
  justify-content: center;
}

.badge {
  border: 1px solid v-bind("props.badgeColor");
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: v-bind("props.badgeColor");
  text-transform: uppercase;
  align-self: flex-end;
  float: left;
}

.card-content {
  position: relative;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  z-index: 2;
}

.hover-effect {
  background-color: #0047fd;
}

.hover-effect::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at v-bind("`${gradientPosition.x}px ${gradientPosition.y}px`"),
    rgb(254, 40, 117) 0%,
    rgba(254, 40, 117, 0) calc(0% + 200px)
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
}
</style>
