import React from 'react';

import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {apiAddress} from "./options";
import {BeeFamilyCreate, BeeFamilyEdit, BeeFamilyList, BeeFamilyShow} from "./pages/BeeFamily";
import {BeeBreedCreate, BeeBreedEdit, BeeBreedList} from "./pages/BeeBreed";
import {BeeDiseaseCreate, BeeDiseaseEdit, BeeDiseaseList} from "./pages/BeeDisease";
import {BeeFamilyStatusCreate, BeeFamilyStatusEdit, BeeFamilyStatusList} from "./pages/BeeFamilyStatus";
import {BeeFarmCreate, BeeFarmEdit, BeeFarmList, BeeFarmShow} from "./pages/BeeFarm";
import {BeeFarmSizeCreate, BeeFarmSizeEdit, BeeFarmSizeList} from "./pages/BeeFarmSize";
import {BeeFarmTypeCreate, BeeFarmTypeEdit, BeeFarmTypeList} from "./pages/BeeFarmType";
import {FamilyDiseaseCreate, FamilyDiseaseEdit, FamilyDiseaseList} from "./pages/FamilyDisease";
import {HiveCreate, HiveEdit, HiveList, HiveShow} from "./pages/Hive";
import {HiveFormatCreate, HiveFormatEdit, HiveFormatList} from "./pages/HiveFormat";
import {HiveFrameTypeCreate, HiveFrameTypeEdit, HiveFrameTypeList} from "./pages/HiveFrameType";
import {HoneyHarvestCreate, HoneyHarvestEdit, HoneyHarvestList} from "./pages/HoneyHarvest";
import {HoneySaleCreate, HoneySaleEdit, HoneySaleList} from "./pages/HoneySale";
import {HoneyTypeCreate, HoneyTypeEdit, HoneyTypeList} from "./pages/HoneyType";
import {ReminderCreate, ReminderEdit, ReminderList, ReminderShow} from "./pages/Reminder";
import {SubscriptionTypeCreate, SubscriptionTypeEdit, SubscriptionTypeList} from "./pages/SubscriptionType";
import {SubscriptionStatusCreate, SubscriptionStatusEdit, SubscriptionStatusList} from "./pages/SubscriptionStatus";
import {UserCreate, UserEdit, UserList, UserShow} from "./pages/User";
import {NewsCreate, NewsEdit, NewsList} from "./pages/News";
import {ControlHarvestCreate, ControlHarvestEdit, ControlHarvestList} from "./pages/ControlHarvest";
import {PollenHarvestCreate, PollenHarvestEdit, PollenHarvestList} from "./pages/PollenHarvest";
import {SwarmCreate, SwarmEdit, SwarmList} from "./pages/Swarm";
import {SwarmStatusCreate, SwarmStatusEdit, SwarmStatusList} from "./pages/SwarmStatus";
import {WikiPageCreate, WikiPageEdit, WikiPageList, WikiPageShow} from "./pages/WIkiPage";
import {WikiSectionCreate, WikiSectionEdit, WikiSectionList} from "./pages/WikiSection";

import MyLoginPage from "./auth/MyLoginPage";
import MyLogoutButton from "./auth/MyLogoutButton";
import authProvider from "./authProvider";

// LOCALIZATION:
// import polyglotI18nProvider from 'ra-i18n-polyglot';
// import russianMessages from 'ra-language-russian';
//
// const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

// AUTH PROVIDER
const httpClient = (url, options = {}) => {
      if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('Authorization', `Bearer ${token}`);
      return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(apiAddress, httpClient);

const App = () => (
    <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton} authProvider={authProvider}  dataProvider={dataProvider}>
        <Resource name="bee_breed" list={BeeBreedList} create={BeeBreedCreate} edit={BeeBreedEdit} />
        <Resource name="bee_disease" list={BeeDiseaseList} create={BeeDiseaseCreate} edit={BeeDiseaseEdit} />
        <Resource name="bee_family" list={BeeFamilyList} create={BeeFamilyCreate} edit={BeeFamilyEdit} show={BeeFamilyShow} />
        <Resource name="bee_family_status" list={BeeFamilyStatusList} create={BeeFamilyStatusCreate} edit={BeeFamilyStatusEdit} />
        <Resource name="bee_farm" list={BeeFarmList} create={BeeFarmCreate} edit={BeeFarmEdit} show={BeeFarmShow} />
        <Resource name="bee_farm_size" list={BeeFarmSizeList} create={BeeFarmSizeCreate} edit={BeeFarmSizeEdit} />
        <Resource name="bee_farm_type" list={BeeFarmTypeList} create={BeeFarmTypeCreate} edit={BeeFarmTypeEdit} />
        <Resource name="control_harvest" list={ControlHarvestList} create={ControlHarvestCreate} edit={ControlHarvestEdit} />
        <Resource name="family_disease" list={FamilyDiseaseList} create={FamilyDiseaseCreate} edit={FamilyDiseaseEdit} />
        <Resource name="hive" list={HiveList} create={HiveCreate} edit={HiveEdit} show={HiveShow} />
        <Resource name="hive_format" list={HiveFormatList} create={HiveFormatCreate} edit={HiveFormatEdit} />
        <Resource name="hive_frame_type" list={HiveFrameTypeList} create={HiveFrameTypeCreate} edit={HiveFrameTypeEdit} />
        <Resource name="honey_harvest" list={HoneyHarvestList} create={HoneyHarvestCreate} edit={HoneyHarvestEdit} />
        <Resource name="honey_sale" list={HoneySaleList} create={HoneySaleCreate} edit={HoneySaleEdit} />
        <Resource name="honey_type" list={HoneyTypeList} create={HoneyTypeCreate} edit={HoneyTypeEdit} />
        <Resource name="news" list={NewsList} create={NewsCreate} edit={NewsEdit} />
        <Resource name="pollen_harvest" list={PollenHarvestList} create={PollenHarvestCreate} edit={PollenHarvestEdit} />
        <Resource name="reminder" list={ReminderList} create={ReminderCreate} edit={ReminderEdit} show={ReminderShow} />
        <Resource name="subscription_status" list={SubscriptionStatusList} create={SubscriptionStatusCreate} edit={SubscriptionStatusEdit} />
        <Resource name="subscription_type" list={SubscriptionTypeList} create={SubscriptionTypeCreate} edit={SubscriptionTypeEdit} />
        <Resource name="swarm" list={SwarmList} create={SwarmCreate} edit={SwarmEdit} />
        <Resource name="swarm_status" list={SwarmStatusList} create={SwarmStatusCreate} edit={SwarmStatusEdit} />
        <Resource name="user" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} />
        <Resource name="wiki_page" list={WikiPageList} create={WikiPageCreate} edit={WikiPageEdit} show={WikiPageShow} />
        <Resource name="wiki_section" list={WikiSectionList} create={WikiSectionCreate} edit={WikiSectionEdit} />
    </Admin>
);

export default App;
