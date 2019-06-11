<template>
  <div>
    <div v-for="(month, key) in upcomingConferences"
      v-if="month.length > 0"
      :key="key">
      <h4>{{ key }}</h4>
      <div v-for="event in month"
        :key="event.name">
        <a :href="event.eventLink"
          target="_blank">
          <h3>{{ event.name }}
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
              <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
              <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
            </svg>
          </h3>
        </a>
        <ul>
          <li>Date: {{ event.date }}</li>
          <li>Location: {{ event.location }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import events from '../../data/2019.json';
import { isPast, didNotExpire } from '../../utils';

export default {
  data() {
    return {
      allEvents: events
    }
  },
  computed: {
    upcomingConferences() {
      let events = {}
      Object.keys(this.allEvents).forEach(key=>{
        events[key] = this.allEvents[key].filter(a=> didNotExpire(a.endDate))
      })
      return events
    }
  }
}
</script>

<style lang="css">
</style>
