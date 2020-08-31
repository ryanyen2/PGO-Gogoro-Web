<template>
  <div>
    <v-row class="fill-height" data-app="true">
      <v-col>
        <h2>價格及項目參考</h2>
        <div role="tablist">
          <b-card no-body class="mb-1 mt-6">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info"
                >保養車輛</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <img
                    src="../../assets/reservation_page-0001.jpg"
                    width="120%"
                    alt=""
                  />
                  <img
                    src="../../assets/reservation_page-0002.jpg"
                    width="120%"
                    alt=""
                  />
                  <img
                    src="../../assets/reservation_page-0003.jpg"
                    width="120%"
                    alt=""
                  />
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info"
                >維修車輛</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="info"
                >更換輪胎</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <img src="../../assets/tire-0001.jpg" width="120%" alt="" />
                  <img src="../../assets/tire-0002.jpg" width="120%" alt="" />
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <p>實際價格以現場評估為主</p>
        <p>如果您沒有電子郵件信箱，也可以打電話預約喔~</p>
      </v-col>

      <v-col>
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="#17a2b8" @click="setToday">
              今天
            </v-btn>
            <v-btn
              class="mr-4"
              large
              dark
              color="#17a2b8"
              @click.stop="dialog = true"
            >
              預約維修服務
            </v-btn>
            <v-btn fab text small color="#17a2b8" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small color="#17a2b8" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>日</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>週</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>月</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4天</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>

        <v-dialog v-model="dialog" max-width="500">
          <v-card class="p-3" elevation>
            <v-container>
              <v-form @submit.prevent="addEvent">
                <v-text-field
                  v-model="name"
                  type="name"
                  label="名子"
                  filled
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  type="email"
                  label="電子郵件信箱(必須)"
                  required
                  filled
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="refferer"
                  type="number"
                  label="推薦人電話"
                  filled
                  dense
                ></v-text-field>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
                ></b-form-select>
                <v-text-field
                  filled
                  dense
                  v-model="start"
                  type="date"
                  label="日期"
                ></v-text-field>
                <p class="m-2">預約時間</p>
                <v-time-picker
                  color="#007bff"
                  v-model="time"
                  min="9:00"
                  max="17:00"
                  format="24hr"
                  :allowed-minutes="allowedStep"
                  class="m-2 timePicker"
                ></v-time-picker>
                <v-text-field
                  filled
                  dense
                  v-model="color"
                  type="color"
                  label="顏色"
                ></v-text-field>
                <v-btn
                  type="submit"
                  outlined
                  dark
                  color="#17a2b8"
                  @click.stop="dialog = false"
                >
                  新增預約
                  <span style="font-style: italic;"
                    >(系統將寄送預約成功電子郵件到您的信箱)</span
                  >
                </v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>

        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="#17a2b8"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            :event-margin-bottom="3"
            :now="today"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.email"></span>
                <br />
                <span v-html="selectedEvent.selected"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  取消
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from "@/config/firebaseConfig.js";
import emailjs from "emailjs-com";

export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    name: null,
    email: null,
    time: null,
    end: null,
    start: null,
    refferer: null,
    selected: "保養車輛",
    options: [
      { item: "保養車輛", name: "保養車輛" },
      { item: "維修車輛", name: "維修車輛" },
      { item: "更換輪胎", name: "更換輪胎" },
    ],
    color: "#1976D2",
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogDate: false,
    timeStep: "8:00",
  }),
  mounted() {
    this.getEvents();
  },
  computed: {
    title() {
      const { start } = this;
      if (!start) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const startYear = start.year;
      const startDay = start.day + this.nth(start.day);
      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long",
      });
    },
  },
  methods: {
    allowedMinutes: (v) => v >= 10 && v <= 50,
    allowedStep: (m) => m % 60 === 0,
    async getEvents() {
      let snapshot = await db.collection("rsv-cal").get();
      const events = [];
      snapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        events.push({
          id: appData.id,
          start: appData.start,
          email: appData.email,
          refferer: appData.refferer,
          name: appData.name,
          selected: appData.selected,
          color: appData.color,
        });
      });
      this.events = events;
    },
    setDialogDate({ date }) {
      this.dialogDate = true;
      this.focus = date;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    async addEvent() {
      let snapshot = await db.collection("rsv-cal").get();
      let flag = false;
      snapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        if (appData.start == `${this.start} ${this.time}`) {
          flag = true;
        }
      });
      if (!flag && this.name && this.start && this.time) {
        await db.collection("rsv-cal").add({
          name: this.name,
          email: this.email,
          refferer: this.refferer,
          selected: this.selected,
          start: `${this.start} ${this.time}`,
          color: this.color,
        });
        this.getEvents();
      } else {
        if (flag) {
          alert("這個時段已經有人預約，請輸入其他時段");
          flag = false;
        } else alert("請輸入名子、電子郵件信箱與預約時間");
      }
      emailjs.init("user_ZrOPJCjUfxsx5AJ7kJXkk");
      if (
        !flag &&
        this.email != null &&
        this.start != null &&
        this.time != null
      ) {
        var template_params = {
          user_email: this.email,
          user_name: this.name,
          start: this.start,
          time: this.time,
        };
        var service_id = "gmail";
        var template_id = "pgo_reservation";
        var user_id = "user_ZrOPJCjUfxsx5AJ7kJXkk";
        console.log(template_params);
        emailjs
          .send(
            service_id,
            template_id,
            {
              user_email: this.email,
              user_name: this.name,
              start: this.start,
              time: this.time,
            },
            user_id
          )
          .then(
            function(response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function(error) {
              console.log("FAILED...", error);
            }
          );
      }
        (this.name = ""),
        (this.refferer = ''),
        (this.selected = "保養車輛"),
        (this.email = ""),
        (this.start = ""),
        (this.time = ""),
        (this.color = "#1976D2");
    },
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },
    async updateEvent(ev) {
      await db
        .collection("rsv-cal")
        .doc(this.currentlyEditing)
        .update({
          email: ev.email,
        });
      (this.selectedOpen = false), (this.currentlyEditing = null);
    },
    async deleteEvent(ev) {
      await db
        .collection("rsv-cal")
        .doc(ev)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
      (this.selectedOpen = false), this.getEvents();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start }) {
      this.start = start;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
  },
};
</script>

<style></style>
