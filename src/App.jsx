/*“We build AI-powered client acquisition systems”*/

import React from "react";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countryCodes = [
  { label: "Afghanistan +93", value: "+93" },
  { label: "Albania +355", value: "+355" },
  { label: "Algeria +213", value: "+213" },
  { label: "American Samoa +1684", value: "+1684" },
  { label: "Andorra +376", value: "+376" },
  { label: "Angola +244", value: "+244" },
  { label: "Anguilla +1264", value: "+1264" },
  { label: "Antigua and Barbuda +1268", value: "+1268" },
  { label: "Argentina +54", value: "+54" },
  { label: "Armenia +374", value: "+374" },
  { label: "Aruba +297", value: "+297" },
  { label: "Australia +61", value: "+61" },
  { label: "Austria +43", value: "+43" },
  { label: "Azerbaijan +994", value: "+994" },
  { label: "Bahamas +1242", value: "+1242" },
  { label: "Bahrain +973", value: "+973" },
  { label: "Bangladesh +880", value: "+880" },
  { label: "Barbados +1246", value: "+1246" },
  { label: "Belarus +375", value: "+375" },
  { label: "Belgium +32", value: "+32" },
  { label: "Belize +501", value: "+501" },
  { label: "Benin +229", value: "+229" },
  { label: "Bermuda +1441", value: "+1441" },
  { label: "Bhutan +975", value: "+975" },
  { label: "Bolivia +591", value: "+591" },
  { label: "Bosnia and Herzegovina +387", value: "+387" },
  { label: "Botswana +267", value: "+267" },
  { label: "Brazil +55", value: "+55" },
  { label: "British Virgin Islands +1284", value: "+1284" },
  { label: "Brunei +673", value: "+673" },
  { label: "Bulgaria +359", value: "+359" },
  { label: "Burkina Faso +226", value: "+226" },
  { label: "Burundi +257", value: "+257" },
  { label: "Cambodia +855", value: "+855" },
  { label: "Cameroon +237", value: "+237" },
  { label: "Canada +1", value: "+1" },
  { label: "Cape Verde +238", value: "+238" },
  { label: "Cayman Islands +1345", value: "+1345" },
  { label: "Central African Republic +236", value: "+236" },
  { label: "Chad +235", value: "+235" },
  { label: "Chile +56", value: "+56" },
  { label: "China +86", value: "+86" },
  { label: "Colombia +57", value: "+57" },
  { label: "Comoros +269", value: "+269" },
  { label: "Congo +242", value: "+242" },
  { label: "Cook Islands +682", value: "+682" },
  { label: "Costa Rica +506", value: "+506" },
  { label: "Croatia +385", value: "+385" },
  { label: "Cuba +53", value: "+53" },
  { label: "Curacao +599", value: "+599" },
  { label: "Cyprus +357", value: "+357" },
  { label: "Czech Republic +420", value: "+420" },
  { label: "Democratic Republic of Congo +243", value: "+243" },
  { label: "Denmark +45", value: "+45" },
  { label: "Djibouti +253", value: "+253" },
  { label: "Dominica +1767", value: "+1767" },
  { label: "Dominican Republic +1809", value: "+1809" },
  { label: "Dominican Republic +1829", value: "+1829" },
  { label: "Dominican Republic +1849", value: "+1849" },
  { label: "Ecuador +593", value: "+593" },
  { label: "Egypt +20", value: "+20" },
  { label: "El Salvador +503", value: "+503" },
  { label: "Equatorial Guinea +240", value: "+240" },
  { label: "Eritrea +291", value: "+291" },
  { label: "Estonia +372", value: "+372" },
  { label: "Eswatini +268", value: "+268" },
  { label: "Ethiopia +251", value: "+251" },
  { label: "Falkland Islands +500", value: "+500" },
  { label: "Faroe Islands +298", value: "+298" },
  { label: "Fiji +679", value: "+679" },
  { label: "Finland +358", value: "+358" },
  { label: "France +33", value: "+33" },
  { label: "French Guiana +594", value: "+594" },
  { label: "French Polynesia +689", value: "+689" },
  { label: "Gabon +241", value: "+241" },
  { label: "Gambia +220", value: "+220" },
  { label: "Georgia +995", value: "+995" },
  { label: "Germany +49", value: "+49" },
  { label: "Ghana +233", value: "+233" },
  { label: "Gibraltar +350", value: "+350" },
  { label: "Greece +30", value: "+30" },
  { label: "Greenland +299", value: "+299" },
  { label: "Grenada +1473", value: "+1473" },
  { label: "Guadeloupe +590", value: "+590" },
  { label: "Guam +1671", value: "+1671" },
  { label: "Guatemala +502", value: "+502" },
  { label: "Guernsey +44", value: "+44" },
  { label: "Guinea +224", value: "+224" },
  { label: "Guinea-Bissau +245", value: "+245" },
  { label: "Guyana +592", value: "+592" },
  { label: "Haiti +509", value: "+509" },
  { label: "Honduras +504", value: "+504" },
  { label: "Hong Kong +852", value: "+852" },
  { label: "Hungary +36", value: "+36" },
  { label: "Iceland +354", value: "+354" },
  { label: "India +91", value: "+91" },
  { label: "Indonesia +62", value: "+62" },
  { label: "Iran +98", value: "+98" },
  { label: "Iraq +964", value: "+964" },
  { label: "Ireland +353", value: "+353" },
  { label: "Isle of Man +44", value: "+44" },
  { label: "Israel +972", value: "+972" },
  { label: "Italy +39", value: "+39" },
  { label: "Ivory Coast +225", value: "+225" },
  { label: "Jamaica +1876", value: "+1876" },
  { label: "Japan +81", value: "+81" },
  { label: "Jersey +44", value: "+44" },
  { label: "Jordan +962", value: "+962" },
  { label: "Kazakhstan +7", value: "+7" },
  { label: "Kenya +254", value: "+254" },
  { label: "Kiribati +686", value: "+686" },
  { label: "Kosovo +383", value: "+383" },
  { label: "Kuwait +965", value: "+965" },
  { label: "Kyrgyzstan +996", value: "+996" },
  { label: "Laos +856", value: "+856" },
  { label: "Latvia +371", value: "+371" },
  { label: "Lebanon +961", value: "+961" },
  { label: "Lesotho +266", value: "+266" },
  { label: "Liberia +231", value: "+231" },
  { label: "Libya +218", value: "+218" },
  { label: "Liechtenstein +423", value: "+423" },
  { label: "Lithuania +370", value: "+370" },
  { label: "Luxembourg +352", value: "+352" },
  { label: "Macau +853", value: "+853" },
  { label: "Madagascar +261", value: "+261" },
  { label: "Malawi +265", value: "+265" },
  { label: "Malaysia +60", value: "+60" },
  { label: "Maldives +960", value: "+960" },
  { label: "Mali +223", value: "+223" },
  { label: "Malta +356", value: "+356" },
  { label: "Marshall Islands +692", value: "+692" },
  { label: "Martinique +596", value: "+596" },
  { label: "Mauritania +222", value: "+222" },
  { label: "Mauritius +230", value: "+230" },
  { label: "Mayotte +262", value: "+262" },
  { label: "Mexico +52", value: "+52" },
  { label: "Micronesia +691", value: "+691" },
  { label: "Moldova +373", value: "+373" },
  { label: "Monaco +377", value: "+377" },
  { label: "Mongolia +976", value: "+976" },
  { label: "Montenegro +382", value: "+382" },
  { label: "Montserrat +1664", value: "+1664" },
  { label: "Morocco +212", value: "+212" },
  { label: "Mozambique +258", value: "+258" },
  { label: "Myanmar +95", value: "+95" },
  { label: "Namibia +264", value: "+264" },
  { label: "Nauru +674", value: "+674" },
  { label: "Nepal +977", value: "+977" },
  { label: "Netherlands +31", value: "+31" },
  { label: "New Caledonia +687", value: "+687" },
  { label: "New Zealand +64", value: "+64" },
  { label: "Nicaragua +505", value: "+505" },
  { label: "Niger +227", value: "+227" },
  { label: "Nigeria +234", value: "+234" },
  { label: "Niue +683", value: "+683" },
  { label: "North Korea +850", value: "+850" },
  { label: "North Macedonia +389", value: "+389" },
  { label: "Northern Mariana Islands +1670", value: "+1670" },
  { label: "Norway +47", value: "+47" },
  { label: "Oman +968", value: "+968" },
  { label: "Pakistan +92", value: "+92" },
  { label: "Palau +680", value: "+680" },
  { label: "Palestine +970", value: "+970" },
  { label: "Panama +507", value: "+507" },
  { label: "Papua New Guinea +675", value: "+675" },
  { label: "Paraguay +595", value: "+595" },
  { label: "Peru +51", value: "+51" },
  { label: "Philippines +63", value: "+63" },
  { label: "Poland +48", value: "+48" },
  { label: "Portugal +351", value: "+351" },
  { label: "Puerto Rico +1787", value: "+1787" },
  { label: "Puerto Rico +1939", value: "+1939" },
  { label: "Qatar +974", value: "+974" },
  { label: "Reunion +262", value: "+262" },
  { label: "Romania +40", value: "+40" },
  { label: "Russia +7", value: "+7" },
  { label: "Rwanda +250", value: "+250" },
  { label: "Saint Barthelemy +590", value: "+590" },
  { label: "Saint Helena +290", value: "+290" },
  { label: "Saint Kitts and Nevis +1869", value: "+1869" },
  { label: "Saint Lucia +1758", value: "+1758" },
  { label: "Saint Martin +590", value: "+590" },
  { label: "Saint Pierre and Miquelon +508", value: "+508" },
  { label: "Saint Vincent and the Grenadines +1784", value: "+1784" },
  { label: "Samoa +685", value: "+685" },
  { label: "San Marino +378", value: "+378" },
  { label: "Sao Tome and Principe +239", value: "+239" },
  { label: "Saudi Arabia +966", value: "+966" },
  { label: "Senegal +221", value: "+221" },
  { label: "Serbia +381", value: "+381" },
  { label: "Seychelles +248", value: "+248" },
  { label: "Sierra Leone +232", value: "+232" },
  { label: "Singapore +65", value: "+65" },
  { label: "Sint Maarten +1721", value: "+1721" },
  { label: "Slovakia +421", value: "+421" },
  { label: "Slovenia +386", value: "+386" },
  { label: "Solomon Islands +677", value: "+677" },
  { label: "Somalia +252", value: "+252" },
  { label: "South Africa +27", value: "+27" },
  { label: "South Korea +82", value: "+82" },
  { label: "South Sudan +211", value: "+211" },
  { label: "Spain +34", value: "+34" },
  { label: "Sri Lanka +94", value: "+94" },
  { label: "Sudan +249", value: "+249" },
  { label: "Suriname +597", value: "+597" },
  { label: "Sweden +46", value: "+46" },
  { label: "Switzerland +41", value: "+41" },
  { label: "Syria +963", value: "+963" },
  { label: "Taiwan +886", value: "+886" },
  { label: "Tajikistan +992", value: "+992" },
  { label: "Tanzania +255", value: "+255" },
  { label: "Thailand +66", value: "+66" },
  { label: "Timor-Leste +670", value: "+670" },
  { label: "Togo +228", value: "+228" },
  { label: "Tokelau +690", value: "+690" },
  { label: "Tonga +676", value: "+676" },
  { label: "Trinidad and Tobago +1868", value: "+1868" },
  { label: "Tunisia +216", value: "+216" },
  { label: "Turkey +90", value: "+90" },
  { label: "Turkmenistan +993", value: "+993" },
  { label: "Turks and Caicos Islands +1649", value: "+1649" },
  { label: "Tuvalu +688", value: "+688" },
  { label: "Uganda +256", value: "+256" },
  { label: "Ukraine +380", value: "+380" },
  { label: "United Arab Emirates +971", value: "+971" },
  { label: "United Kingdom +44", value: "+44" },
  { label: "United States +1", value: "+1" },
  { label: "Uruguay +598", value: "+598" },
  { label: "US Virgin Islands +1340", value: "+1340" },
  { label: "Uzbekistan +998", value: "+998" },
  { label: "Vanuatu +678", value: "+678" },
  { label: "Vatican City +39", value: "+39" },
  { label: "Venezuela +58", value: "+58" },
  { label: "Vietnam +84", value: "+84" },
  { label: "Wallis and Futuna +681", value: "+681" },
  { label: "Western Sahara +212", value: "+212" },
  { label: "Yemen +967", value: "+967" },
  { label: "Zambia +260", value: "+260" },
  { label: "Zimbabwe +263", value: "+263" },
];

const isoCountryLabels = {
  af: "Afghanistan +93",
  al: "Albania +355",
  dz: "Algeria +213",
  as: "American Samoa +1684",
  ad: "Andorra +376",
  ao: "Angola +244",
  ai: "Anguilla +1264",
  ag: "Antigua and Barbuda +1268",
  ar: "Argentina +54",
  am: "Armenia +374",
  aw: "Aruba +297",
  au: "Australia +61",
  at: "Austria +43",
  az: "Azerbaijan +994",
  bs: "Bahamas +1242",
  bh: "Bahrain +973",
  bd: "Bangladesh +880",
  bb: "Barbados +1246",
  by: "Belarus +375",
  be: "Belgium +32",
  bz: "Belize +501",
  bj: "Benin +229",
  bm: "Bermuda +1441",
  bt: "Bhutan +975",
  bo: "Bolivia +591",
  ba: "Bosnia and Herzegovina +387",
  bw: "Botswana +267",
  br: "Brazil +55",
  vg: "British Virgin Islands +1284",
  bn: "Brunei +673",
  bg: "Bulgaria +359",
  bf: "Burkina Faso +226",
  bi: "Burundi +257",
  kh: "Cambodia +855",
  cm: "Cameroon +237",
  ca: "Canada +1",
  cv: "Cape Verde +238",
  ky: "Cayman Islands +1345",
  cf: "Central African Republic +236",
  td: "Chad +235",
  cl: "Chile +56",
  cn: "China +86",
  co: "Colombia +57",
  km: "Comoros +269",
  cg: "Congo +242",
  ck: "Cook Islands +682",
  cr: "Costa Rica +506",
  hr: "Croatia +385",
  cu: "Cuba +53",
  cw: "Curacao +599",
  cy: "Cyprus +357",
  cz: "Czech Republic +420",
  cd: "Democratic Republic of Congo +243",
  dk: "Denmark +45",
  dj: "Djibouti +253",
  dm: "Dominica +1767",
  do: "Dominican Republic +1809",
  ec: "Ecuador +593",
  eg: "Egypt +20",
  sv: "El Salvador +503",
  gq: "Equatorial Guinea +240",
  er: "Eritrea +291",
  ee: "Estonia +372",
  sz: "Eswatini +268",
  et: "Ethiopia +251",
  fk: "Falkland Islands +500",
  fo: "Faroe Islands +298",
  fj: "Fiji +679",
  fi: "Finland +358",
  fr: "France +33",
  gf: "French Guiana +594",
  pf: "French Polynesia +689",
  ga: "Gabon +241",
  gm: "Gambia +220",
  ge: "Georgia +995",
  de: "Germany +49",
  gh: "Ghana +233",
  gi: "Gibraltar +350",
  gr: "Greece +30",
  gl: "Greenland +299",
  gd: "Grenada +1473",
  gp: "Guadeloupe +590",
  gu: "Guam +1671",
  gt: "Guatemala +502",
  gg: "Guernsey +44",
  gn: "Guinea +224",
  gw: "Guinea-Bissau +245",
  gy: "Guyana +592",
  ht: "Haiti +509",
  hn: "Honduras +504",
  hk: "Hong Kong +852",
  hu: "Hungary +36",
  is: "Iceland +354",
  in: "India +91",
  id: "Indonesia +62",
  ir: "Iran +98",
  iq: "Iraq +964",
  ie: "Ireland +353",
  im: "Isle of Man +44",
  il: "Israel +972",
  it: "Italy +39",
  ci: "Ivory Coast +225",
  jm: "Jamaica +1876",
  jp: "Japan +81",
  je: "Jersey +44",
  jo: "Jordan +962",
  kz: "Kazakhstan +7",
  ke: "Kenya +254",
  ki: "Kiribati +686",
  xk: "Kosovo +383",
  kw: "Kuwait +965",
  kg: "Kyrgyzstan +996",
  la: "Laos +856",
  lv: "Latvia +371",
  lb: "Lebanon +961",
  ls: "Lesotho +266",
  lr: "Liberia +231",
  ly: "Libya +218",
  li: "Liechtenstein +423",
  lt: "Lithuania +370",
  lu: "Luxembourg +352",
  mo: "Macau +853",
  mg: "Madagascar +261",
  mw: "Malawi +265",
  my: "Malaysia +60",
  mv: "Maldives +960",
  ml: "Mali +223",
  mt: "Malta +356",
  mh: "Marshall Islands +692",
  mq: "Martinique +596",
  mr: "Mauritania +222",
  mu: "Mauritius +230",
  yt: "Mayotte +262",
  mx: "Mexico +52",
  fm: "Micronesia +691",
  md: "Moldova +373",
  mc: "Monaco +377",
  mn: "Mongolia +976",
  me: "Montenegro +382",
  ms: "Montserrat +1664",
  ma: "Morocco +212",
  mz: "Mozambique +258",
  mm: "Myanmar +95",
  na: "Namibia +264",
  nr: "Nauru +674",
  np: "Nepal +977",
  nl: "Netherlands +31",
  nc: "New Caledonia +687",
  nz: "New Zealand +64",
  ni: "Nicaragua +505",
  ne: "Niger +227",
  ng: "Nigeria +234",
  nu: "Niue +683",
  kp: "North Korea +850",
  mk: "North Macedonia +389",
  mp: "Northern Mariana Islands +1670",
  no: "Norway +47",
  om: "Oman +968",
  pk: "Pakistan +92",
  pw: "Palau +680",
  ps: "Palestine +970",
  pa: "Panama +507",
  pg: "Papua New Guinea +675",
  py: "Paraguay +595",
  pe: "Peru +51",
  ph: "Philippines +63",
  pl: "Poland +48",
  pt: "Portugal +351",
  pr: "Puerto Rico +1787",
  qa: "Qatar +974",
  re: "Reunion +262",
  ro: "Romania +40",
  ru: "Russia +7",
  rw: "Rwanda +250",
  bl: "Saint Barthelemy +590",
  sh: "Saint Helena +290",
  kn: "Saint Kitts and Nevis +1869",
  lc: "Saint Lucia +1758",
  mf: "Saint Martin +590",
  pm: "Saint Pierre and Miquelon +508",
  vc: "Saint Vincent and the Grenadines +1784",
  ws: "Samoa +685",
  sm: "San Marino +378",
  st: "Sao Tome and Principe +239",
  sa: "Saudi Arabia +966",
  sn: "Senegal +221",
  rs: "Serbia +381",
  sc: "Seychelles +248",
  sl: "Sierra Leone +232",
  sg: "Singapore +65",
  sx: "Sint Maarten +1721",
  sk: "Slovakia +421",
  si: "Slovenia +386",
  sb: "Solomon Islands +677",
  so: "Somalia +252",
  za: "South Africa +27",
  kr: "South Korea +82",
  ss: "South Sudan +211",
  es: "Spain +34",
  lk: "Sri Lanka +94",
  sd: "Sudan +249",
  sr: "Suriname +597",
  se: "Sweden +46",
  ch: "Switzerland +41",
  sy: "Syria +963",
  tw: "Taiwan +886",
  tj: "Tajikistan +992",
  tz: "Tanzania +255",
  th: "Thailand +66",
  tl: "Timor-Leste +670",
  tg: "Togo +228",
  tk: "Tokelau +690",
  to: "Tonga +676",
  tt: "Trinidad and Tobago +1868",
  tn: "Tunisia +216",
  tr: "Turkey +90",
  tm: "Turkmenistan +993",
  tc: "Turks and Caicos Islands +1649",
  tv: "Tuvalu +688",
  ug: "Uganda +256",
  ua: "Ukraine +380",
  ae: "United Arab Emirates +971",
  gb: "United Kingdom +44",
  us: "United States +1",
  uy: "Uruguay +598",
  vi: "US Virgin Islands +1340",
  uz: "Uzbekistan +998",
  vu: "Vanuatu +678",
  va: "Vatican City +39",
  ve: "Venezuela +58",
  vn: "Vietnam +84",
  wf: "Wallis and Futuna +681",
  eh: "Western Sahara +212",
  ye: "Yemen +967",
  zm: "Zambia +260",
  zw: "Zimbabwe +263",
};

const timezoneCountryLabels = {
  "Asia/Calcutta": "India +91",
  "Asia/Kolkata": "India +91",
  "America/New_York": "United States +1",
  "America/Chicago": "United States +1",
  "America/Denver": "United States +1",
  "America/Los_Angeles": "United States +1",
  "America/Phoenix": "United States +1",
  "America/Anchorage": "United States +1",
  "Pacific/Honolulu": "United States +1",
  "Europe/Berlin": "Germany +49",
  "Europe/London": "United Kingdom +44",
  "Asia/Dubai": "United Arab Emirates +971",
};

class PhoneInputBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Phone input failed, using fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function formatPhoneValue(code, number) {
  const digits = number.replace(/\D/g, "");
  return digits ? `${code}${digits}` : code;
}

function getBrowserCountryLabel() {
  const locale = navigator.languages?.[0] || navigator.language || "";
  const localeRegion = locale.split("-")[1]?.toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return isoCountryLabels[localeRegion] || timezoneCountryLabels[timezone] || "India +91";
}

function InternationalPhoneField({ value, onChange, detectedCountry }) {
  const normalizedValue = value || "";
  const [selectedCountryLabel, setSelectedCountryLabel] = React.useState(() => {
    const matchedCountry = [...countryCodes]
      .sort((first, second) => second.value.length - first.value.length)
      .find((country) => normalizedValue.startsWith(country.value));

    return matchedCountry?.label || detectedCountry || "India +91";
  });
  const selectedIso =
    Object.keys(isoCountryLabels).find(
      (iso) => isoCountryLabels[iso] === selectedCountryLabel
    ) || "in";
  const activeCountryLabel = selectedCountryLabel;
  const selectedCountry =
    countryCodes.find((country) => country.label === activeCountryLabel) ||
    countryCodes.find((country) => country.label === "India +91");
  const selectedCode = selectedCountry.value;
  const localNumber = normalizedValue.startsWith(selectedCode)
    ? normalizedValue.slice(selectedCode.length)
    : normalizedValue.replace(/^\+?\d{1,4}/, "");

  const fallback = (
    <div style={styles.phoneFallbackWrap}>
      <select
        aria-label="Country code"
        value={activeCountryLabel}
        onChange={(e) => {
          const nextCountry = countryCodes.find(
            (country) => country.label === e.target.value
          );

          setSelectedCountryLabel(e.target.value);
          onChange(formatPhoneValue(nextCountry?.value || "+91", localNumber));
        }}
        style={styles.phoneCodeSelect}
      >
        {countryCodes.map((country) => (
          <option key={country.label} value={country.label}>
            {country.label}
          </option>
        ))}
      </select>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={localNumber}
        onChange={(e) => onChange(formatPhoneValue(selectedCode, e.target.value))}
        style={styles.phoneFallbackInput}
      />
    </div>
  );

  return (
    <PhoneInputBoundary fallback={fallback}>
      <PhoneInput
        country={selectedIso}
        value={normalizedValue}
        onChange={(phone, country) => {
          const countryLabel = isoCountryLabels[country?.countryCode];

          if (countryLabel) {
            setSelectedCountryLabel(countryLabel);
          }

          onChange(phone ? `+${phone.replace(/^\+/, "")}` : "");
        }}
        enableSearch
        specialLabel=""
        inputProps={{
          name: "phone",
          required: true,
        }}
        inputStyle={{
          width: "100%",
          height: "58px",
          borderRadius: "14px",
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.08)",
          color: "white",
          fontSize: "16px",
          paddingLeft: "52px",
        }}
        buttonStyle={{
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.08)",
          borderTopLeftRadius: "14px",
          borderBottomLeftRadius: "14px",
        }}
        dropdownStyle={{
          background: "#0f172a",
          color: "white",
          border: "1px solid rgba(255,255,255,.08)",
        }}
        containerStyle={{
          width: "100%",
        }}
      />
    </PhoneInputBoundary>
  );
}

function App() {

  const [showForm, setShowForm] = React.useState(false);
  const [detectedCountry, setDetectedCountry] = React.useState(getBrowserCountryLabel);

  const [formData, setFormData] = React.useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async () => {
  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxlyVwAmSUs5VcusY6nKyu6pWyEJbcVMWCkJ2BhTAkIzRjqerx7TEoVZ9hNTg7dAfQM/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "no-cors",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to submit booking");
    }

    console.log("SUCCESS:", data);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setShowForm(false);
    alert("Booking submitted");

  } catch (err) {
    console.error(err);
    alert("Error submitting form");
  }
}; 

  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const detectCountryByIp = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        const data = await res.json();
        const countryLabel = isoCountryLabels[data.country_code?.toLowerCase()];

        if (isMounted && countryLabel) {
          setDetectedCountry(countryLabel);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.warn("Country auto-detection fallback used:", error.message);
        }
      }
    };

    detectCountryByIp();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionAnim = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: fadeUp,
    transition: { duration: 0.8 },
  };

  const staggerWrap = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0 },
  };

  if (window.location.pathname === "/admin") {
    return <AdminPanel />;
  }

  return (
    <div style={styles.page}>
      {/* RIGHT SIDE MOTION GLOW */}
      <div className="right-motion-glow"></div>

      {/* Floating Dot */}
      <motion.div
        style={styles.floatDot}
        animate={{
          x: [0, 120, 0, -120, 0],
          y: [120, 0, -120, 0, 120],
          opacity: [0.2, 0.45, 0.25, 0.45, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        style={styles.glowTop}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        style={styles.glowBottom}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 9 }}
      />

      {/* NAVBAR */}
<nav
  style={{
    ...styles.nav,
    justifyContent: "center",
    padding: "0",
    height: "0",
    overflow: "hidden",
  }}
>
</nav>

      {/* HERO */}
      <motion.section
       id="hero-section"
        style={styles.hero}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
 <div className="hero-bg-effect"></div>

        {/* Logo */}
  <div style={styles.heroLogoWrap}>
    <div style={styles.heroLogoGlow}></div>
    <img src={logo} alt="logo" style={styles.heroLogo} />
  </div>

<h2 style={styles.heroBrandText}>
  Grow<span style={{ color: "#00d9ff" }}>Wave</span>
  <span style={styles.aiMini}>.AI</span>
</h2>

        {/* PREMIUM BADGE */}
        <div className="premium-pill">AI POWERED GROWTH AGENCY</div>

        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? "42px" : isTablet ? "58px" : "74px",
          }}
        >
          Get 15-30 Qualified Leads
          <br />
          <span className="wave-run wave-glow">every single month.</span>
        </h1>

        <p style={styles.subtext}>
          We help coaches & consultants grow with AI funnels,smart automation, and content that converts — on autopilot.
        </p>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
  
  {/* 🔥 BUTTON FIRST */}
  {!showForm && (
    <motion.button
      style={styles.ctaBtn}
      whileHover={{ scale: 1.05 }}
      onClick={() => setShowForm(true)}
    >
      Book Free Call →
    </motion.button>
  )}

  {/* 🔥 FORM OPEN AFTER CLICK */}
  {showForm && (
    <div
      style={{
        ...styles.ctaRow,
        flexDirection: "column",
        maxWidth: "500px",
        margin: "30px auto",
        gap: "14px",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />

      <div style={{ width: "100%", marginBottom: "14px" }}>
        <InternationalPhoneField
          value={formData.phone}
          detectedCountry={detectedCountry}
          onChange={(phone) =>
            setFormData((prev) => ({
              ...prev,
              phone,
            }))
          }
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        style={{ ...styles.input, minHeight: "100px" }}
      />

      {/* SUBMIT BUTTON */}
      <motion.button
        style={styles.ctaBtn}
        whileHover={{ scale: 1.05 }}
        onClick={handleSubmit}
      >
        Submit →
      </motion.button>
    </div>
  )}

</div>

        <p style={styles.smallText}>Free Strategy Session • No Commitment • 30 Minutes</p>
      </motion.section>

      {/* TRUSTED BY */}
      <motion.section style={styles.section} {...sectionAnim}>
        <p style={styles.sectionBadge}>TRUSTED BY</p>

        <motion.div
          style={styles.grid4}
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
        >
          {[
            "Coaches",
            "Consultants",
            "Experts",
            "Personal Brands",
          ].map((item, i) => (
            <motion.div key={i} style={styles.card} variants={staggerItem}>
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

{/* WHY */}

<motion.section style={styles.section} {...sectionAnim}>
  <p style={styles.sectionBadge}>WHAT WE OFFER</p>

  <h2
    style={{
      ...styles.sectionHeading,
      fontSize: isMobile ? "28px" : "40px",
      lineHeight: "1.1",
      textAlign: "left",
      maxWidth: "1400px",
      margin: "0 auto 50px",
      letterSpacing: "-2px",
    }}
  >
    <span style={{ color: "white", fontWeight: "800" }}>
      Everything to grow
    </span>

    <span style={{ color: "#3f4758", fontWeight: "500" }}>
      {" "}— nothing you don't need
    </span>
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2,1fr)"
        : "repeat(4,1fr)",
      gap: "26px",
      marginTop: "20px",
    }}
  >
    {[
      {
        title: "AI Funnels",
        text: "High-converting pages + automated email sequences that nurture leads while you sleep.",
        icon: "⚡︎"
      },
      {
        title: "Growth Automation",
        text: "Lead follow-up, CRM updates, booking — automated with Make.com & GoHighLevel.",
        icon: "◉",
      },
      {
        title: "Magnetic Content",
        text: "Scroll-stopping short-form video and copy engineered to attract your ideal clients.",
        icon: "▣",
      },
      {
        title: "Paid Ads",
        text: "Precision Meta & LinkedIn campaigns managed daily to maximize qualified lead flow.",
        icon: "↗",
      },
    ].map((item, i) => (
<motion.div
  key={i}
  className="card-glow"   
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.25 }}
  style={{
    background: "rgba(255,255,255,.02)",
    border: "1px solid rgba(255,255,255,.08)",  
    borderRadius: "28px",
    padding: "28px",
    minHeight: "280px",
    textAlign: "left",
    backdropFilter: "blur(12px)",
  }}
>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            border: "1px solid rgba(0,217,255,.18)",
            background: "rgba(0,217,255,.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00d9ff",
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          {item.icon}
        </div>

        <h3
          style={{
            fontSize: "18px",
            color: "white",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#8b96ad",
            fontSize: "14px",
            lineHeight: "1.65",
          }}
        >
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* RESULTS */}
<motion.section style={styles.section} {...sectionAnim}>
  <p style={styles.sectionBadge}>REAL RESULTS</p>

  <h2 style={styles.sectionHeading}>
    What GrowthWave Clients Achieve
  </h2>

  <div
    style={{
      ...styles.grid3,
      gap: "20px",
    }}
  >
    {[
      ["15–30+", "Qualified Leads / Month"],
      ["24/7", "AI Follow-Up & Automated Bookings"],
      ["3X", "Faster Client Acquisition"],
    ].map((item, i) => (
      <motion.div
        key={i}
        className="card-glow"
        whileHover={{ y: -5 }}
        style={{
          ...styles.card,

          // 🔥 IMPORTANT CHANGES
          padding: "18px",
          height: "120px",
          borderRadius: "20px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "36px",   // 🔻 smaller number
            color: "#00d9ff",
            fontWeight: "800",
            marginBottom: "6px",
          }}
        >
          {item[0]}
        </h3>

        <p
          style={{
            ...styles.cardText,
            fontSize: "14px",   
          }}
        >
          {item[1]}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>

    {/* TIMELINE */}
<motion.section style={styles.section} {...sectionAnim}>
  <p style={styles.sectionBadge}>THE PROCESS</p>

  <h2 style={styles.sectionHeading}>How It Works</h2>

  <div style={styles.timelineWrapNew}>
    {[
      [
        "1",
        "Free Strategy Call",
        "We analyze your offer, audience, and bottleneck to map out a clear 90-day growth trajectory.",
      ],
      [
        "2",
        "We Build Your Growth System",
        "Our team constructs your full acquisition engine — funnels, automations, and ad creatives — in 14 days.",
      ],
      [
        "3",
        "Watch Leads Come In",
        "We flip the switch. You simply open your calendar and see pre-qualified appointments ready to close.",
      ],
    ].map((item, i) => (
      <div key={i} style={styles.timelineRowNew}>
        <div style={styles.timelineCircle}>{item[0]}</div>

        <div style={styles.timelineTextWrap}>
          <h3 style={styles.timelineTitle}>{item[1]}</h3>
          <p style={styles.cardText}>{item[2]}</p>
        </div>
      </div>
    ))}
  </div>
</motion.section>

      {/* ABOUT FOUNDER */}
      <motion.section style={styles.founderSection} {...sectionAnim}>
        <div style={styles.founderGrid}>
          <div>
            <p style={styles.sectionBadge}>ABOUT THE FOUNDER</p>

          <h2
          style={{
          ...styles.founderHeading,
          fontSize: isMobile ? "32px" : "44px",
          }}
          >Built by Pankaj Verma
          </h2>

            <p style={styles.founderText}>
              After working with dozens of coaches and consultants, I realized the biggest bottleneck wasn't delivery — it was consistent, predictable acquisition.
            </p>

            <p style={styles.founderText}>
              GrowWave.AI was born to fix that. We combine cutting-edge AI automations with battle-tested paid media strategies to give elite coaches the unfair advantage they deserve.
            </p>

            <p style={styles.founderBold}>We only win when you win.</p>
          </div>

          <div style={styles.reviewBox}>
            <p style={styles.reviewText}>
              "Working with Pankaj completely transformed my business. Within 60 days we were seeing 4x the qualified appointments at half the cost. It's almost unfair."
            </p>

           <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
  
              {/* 🔵 CIRCLE AVATAR */}
              <div style={styles.avatarCircle}>
                JD
              </div>

              {/* TEXT */}
              <div>
                <h4 style={styles.reviewName}>James D.</h4>
                <p style={styles.reviewRole}>High Ticket Consultant</p>
              </div>

            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section style={styles.finalSection} {...sectionAnim}>
        <p style={styles.sectionBadge}>READY TO GROW?</p>

        <h2
          style={{
            ...styles.finalHeading,
            fontSize: isMobile ? "34px" : "58px",
          }}
        >
          Ready to{" "}
          <span className="wave-run wave-glow">ride the wave?</span>
        </h2>

         <p
    style={{
      ...styles.finalText,
      fontSize: "16px", 
      lineHeight: "1.8",
      maxWidth: "1000px",
      margin: "0 auto 32px",
      whiteSpace: isMobile ? "normal" : "nowrap", 
      letterSpacing: "0.2px"
    }}
  >
    Stop relying on referrals and organic posts. Build a predictable machine today.
  </p>

        <motion.button
  style={styles.finalBtn}
  whileHover={{ scale: 1.05 }}
  onClick={() => {
    // 🔥 scroll to hero section
    document
      .getElementById("hero-section")
      .scrollIntoView({ behavior: "smooth" });

    // 🔥 open form
    setShowForm(true);
  }}
>
  Book Your Free Call Now →
</motion.button>
    
    </motion.section>
    </div>
  );
}

function AdminPanel() {
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const fetchBookings = React.useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("http://localhost:5000/api/bookings");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to load bookings");
      }

      setBookings(data);
    } catch (err) {
      console.error(err);
      setError("Could not load bookings. Make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    queueMicrotask(fetchBookings);
  }, [fetchBookings]);

  const updateStatus = async (id, status) => {
    const previousBookings = bookings;

    setBookings((current) =>
      current.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update status");
      }
    } catch (err) {
      console.error(err);
      setBookings(previousBookings);
      alert("Status update failed");
    }
  };

  return (
    <div style={styles.adminPage}>
      <div style={styles.adminHeader}>
        <div>
          <p style={styles.sectionBadge}>ADMIN PANEL</p>
          <h1 style={styles.adminTitle}>Bookings</h1>
        </div>

        <button style={styles.adminRefreshBtn} onClick={fetchBookings}>
          Refresh
        </button>
      </div>

      {loading && <p style={styles.adminMuted}>Loading bookings...</p>}
      {error && <p style={styles.adminError}>{error}</p>}

      {!loading && !error && (
        <div style={styles.tableWrap}>
          <table style={styles.adminTable}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td style={styles.emptyCell} colSpan="5">
                    No bookings yet.
                  </td>
                </tr>
              )}

              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td style={styles.td}>{booking.name}</td>
                  <td style={styles.td}>{booking.email}</td>
                  <td style={styles.td}>{booking.phone}</td>
                  <td style={styles.td}>{booking.message}</td>
                  <td style={styles.td}>
                    <select
                      value={booking.status}
                      onChange={(e) => updateStatus(booking.id, e.target.value)}
                      style={styles.statusSelect}
                    >
                      <option value="new">new</option>
                      <option value="contacted">contacted</option>
                      <option value="closed">closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {

heroBrandText:{
  fontSize:"34px",
  fontWeight:"800",
  marginTop:"8px",
  marginBottom:"28px",
  letterSpacing:"-1px"
},

aiMini:{
  fontSize:"22px",
  color:"#1ea7ff",
  marginLeft:"3px",
  fontWeight:"700"
},

page:{
  minHeight:"100vh",
  background:"#050816",
  color:"white",
  padding: "0 32px",

  position:"relative",
  overflow:"hidden",
  fontFamily:"Inter, sans-serif"  
},

  floatDot:{
    position:"fixed",
    top:"50%",
    left:"50%",
    width:"6px",
    height:"6px",
    borderRadius:"50%",
    background:"#8be9ff",
    boxShadow:"0 0 10px rgba(139,233,255,.35)",
    zIndex:1,
    pointerEvents:"none"
  },

  glowTop:{
    position:"absolute",
    top:"-180px",
    right:"-100px",
    width:"420px",
    height:"420px",
    background:"rgba(0,217,255,.12)",
    borderRadius:"50%",
    filter:"blur(130px)"
  },

  glowBottom:{
    position:"absolute",
    bottom:"-180px",
    left:"-100px",
    width:"420px",
    height:"420px",
    background:"rgba(0,100,255,.12)",
    borderRadius:"50%",
    filter:"blur(130px)"
  },

  nav:{
    maxWidth:"1040px",
    margin:"0 auto",
    padding:"28px 20px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    zIndex:2,
    position:"relative"
  },

  logo:{
    fontSize:"30px",
    fontWeight:"800"
  },

  navBtn:{
    background:"#00d9ff",
    color:"#000",
    padding:"12px 22px",
    borderRadius:"30px",
    fontWeight:"700"
  },

  hero:{
    maxWidth:"980px",
    margin:"90px auto 0",
    textAlign:"center",
    zIndex:2,
    position:"relative",
  },

  /* 🔥 ADDED LOGO SECTION */
  heroLogoWrap:{
    position:"relative",
    width:"90px",
    height:"90px",
    margin:"0 auto 22px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    overflow:"visible"
  },

  heroLogoGlow:{
    position:"absolute",
    width:"130px",
    height:"130px",
    borderRadius:"50%",
    background:"radial-gradient(circle, rgba(0,217,255,.55) 0%, rgba(0,140,255,.28) 35%, transparent 72%)",
    filter:"blur(24px)",
    zIndex:0,
    animation:"pulseGlow 3s ease-in-out infinite"
  },

  heroLogo:{
    width:"72px",
    height:"72px",
    objectFit:"contain",
    position:"relative",
    zIndex:2,
    filter:"drop-shadow(0 0 12px rgba(0,217,255,.35))"
  },

  heading:{
    fontWeight:"800",
    lineHeight:"1.1",
    marginTop:"24px",
    marginBottom:"18px"
  },

  subtext:{
    color:"#94a3b8",
    lineHeight:"1.7",
    maxWidth:"760px",
    margin:"30px auto",
    fontSize:"20px"
  },

  ctaRow:{
    display:"flex",
    gap:"14px",
    justifyContent:"center",
    flexWrap:"wrap"
  },

  input:{
    padding:"16px",
    borderRadius:"14px",
    background:"rgba(255,255,255,.04)",
    color:"white",
    border:"1px solid rgba(255,255,255,.08)"
  },

  phoneFallbackWrap:{
    width:"100%",
    height:"58px",
    display:"flex",
    overflow:"hidden",
    borderRadius:"14px",
    background:"rgba(255,255,255,.04)",
    border:"1px solid rgba(255,255,255,.08)"
  },

  phoneCodeSelect:{
    width:"190px",
    border:"none",
    borderRight:"1px solid rgba(255,255,255,.08)",
    background:"#0f172a",
    color:"white",
    padding:"0 10px",
    outline:"none",
    fontSize:"14px"
  },

  phoneFallbackInput:{
    flex:1,
    minWidth:0,
    border:"none",
    background:"transparent",
    color:"white",
    padding:"0 16px",
    outline:"none",
    fontSize:"16px"
  },

  ctaBtn:{
    padding:"16px 24px",
    borderRadius:"14px",
    background:"linear-gradient(90deg,#0066ff,#00d9ff)",
    color:"white",
    fontWeight:"700"
  },

  smallText:{
    marginTop:"16px",
    color:"#64748b",
    fontSize:"14px"
  },

  section:{
  maxWidth:"1100px",        
  margin:"110px auto",
  padding:"0 10px",         
  textAlign:"center",
  zIndex:2,
  position:"relative"
},

  sectionBadge:{
    color:"#00d9ff",
    letterSpacing:"3px",
    fontSize:"13px",
    marginBottom:"16px"
  },

sectionHeading:{
  fontSize: "40px",
  fontWeight:"800",
  marginBottom:"42px"
},

  grid4:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"22px"
  },

  grid3:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
    gap:"22px"
  },

  card:{
    padding:"30px",
    borderRadius:"22px",
    background:"rgba(255,255,255,.03)",
    border:"1px solid rgba(255,255,255,.08)",
    fontWeight:"700"
  },

  cardLeft:{
    padding:"30px",
    borderRadius:"22px",
    background:"rgba(255,255,255,.03)",
    border:"1px solid rgba(255,255,255,.08)",
    textAlign:"left"
  },

  cardTitle:{
    color:"#00d9ff",
    fontSize:"24px",
    marginBottom:"14px"
  },

  cardText:{
    color:"#94a3b8",
    lineHeight:"1.7"
  },

  bigNumber:{
    fontSize:"54px",
    color:"#00d9ff",
    marginBottom:"10px",
    fontWeight:"800"
  },

  founderSection: {
  width: "100%",
  maxWidth: "1100px",
  margin: "120px auto",
  padding: "0 24px",      
},

founderGrid:{
  display:"grid",
  gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1.3fr 1fr",
  gap:"40px",
  alignItems:"center"
},

founderHeading:{
  fontSize: window.innerWidth <= 768 ? "30px" : "60px",  // 🔥 responsive
  fontWeight:"800",
  marginBottom:"20px",
  letterSpacing:"-1.5px",
  lineHeight:"1.1",
  maxWidth:"700px",
  
},

  founderText:{
    color:"#94a3b8",
    fontSize:"16px",
    lineHeight:"1.8",
    marginBottom:"18px"
  },

  founderBold:{
    fontWeight:"700",
    fontSize:"24px"
  },

  avatarCircle:{
  width:"44px",
  height:"44px",
  borderRadius:"50%",
  background:"linear-gradient(135deg,#3b82f6,#00d9ff)",

  display:"flex",
  alignItems:"center",
  justifyContent:"center",

  fontWeight:"700",
  fontSize:"14px",
  color:"white",

  boxShadow:"0 0 12px rgba(0,217,255,.3)"
},

  reviewBox:{
    padding:"40px",
    borderRadius:"24px",
    background:"rgba(255,255,255,.03)",
    border:"1px solid rgba(255,255,255,.08)"
  },

  reviewText:{
    color:"#94a3b8",
    fontSize:"16px",
    lineHeight:"1.8",
    fontStyle:"italic",
    marginBottom:"22px"
  },

  reviewName:{
    fontSize:"22px",
    fontWeight:"700"
  },

  reviewRole:{
    color:"#64748b"
  },

  timelineWrapNew:{
    maxWidth:"980px",
    margin:"0 auto",
    display:"flex",
    flexDirection:"column",
    gap:"48px"
  },

  timelineRowNew:{
    display:"flex",
    alignItems:"flex-start",
    gap:"28px",
    textAlign:"left"
  },

  timelineTextWrap:{
    flex:1,
    paddingTop:"8px"
  },

  timelineCircle:{
    width:"58px",
    height:"58px",
    borderRadius:"50%",
    background:"#2563eb",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"800",
    fontSize:"22px",
    flexShrink:0
  },

  timelineTitle:{
    fontSize:"30px",
    marginBottom:"10px"
  },

  finalSection:{
    maxWidth:"1000px",
    margin:"120px auto 90px",
    textAlign:"center",
    padding:"50px 25px",
    borderRadius:"28px",
    background:"rgba(255,255,255,.03)",
    border:"1px solid rgba(255,255,255,.08)",
    zIndex:2,
    position:"relative"
  },

  finalHeading:{
    fontWeight:"800",
    lineHeight:"1.2",
    marginBottom:"20px"
  },

  finalText:{
    color:"#94a3b8",
    lineHeight:"1.7",
    maxWidth:"720px",
    margin:"0 auto 32px",
    fontSize:"20px"
  },

  finalBtn:{
    padding:"18px 34px",
    borderRadius:"16px",
    background:"linear-gradient(90deg,#0066ff,#00d9ff)",
    color:"white",
    fontWeight:"700"
  },

  adminPage:{
    minHeight:"100vh",
    background:"#050816",
    color:"white",
    padding:"48px 32px",
    fontFamily:"Inter, sans-serif"
  },

  adminHeader:{
    maxWidth:"1180px",
    margin:"0 auto 28px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"18px"
  },

  adminTitle:{
    fontSize:"42px",
    lineHeight:"1",
    margin:"0",
    fontWeight:"800"
  },

  adminRefreshBtn:{
    padding:"12px 18px",
    borderRadius:"12px",
    border:"1px solid rgba(255,255,255,.12)",
    background:"#00d9ff",
    color:"#06111f",
    fontWeight:"800",
    cursor:"pointer"
  },

  adminMuted:{
    maxWidth:"1180px",
    margin:"30px auto",
    color:"#94a3b8"
  },

  adminError:{
    maxWidth:"1180px",
    margin:"30px auto",
    color:"#fca5a5"
  },

  tableWrap:{
    maxWidth:"1180px",
    margin:"0 auto",
    overflowX:"auto",
    border:"1px solid rgba(255,255,255,.08)",
    borderRadius:"12px",
    background:"rgba(255,255,255,.03)"
  },

  adminTable:{
    width:"100%",
    borderCollapse:"collapse",
    minWidth:"820px"
  },

  th:{
    padding:"16px",
    textAlign:"left",
    color:"#00d9ff",
    fontSize:"13px",
    letterSpacing:"1px",
    textTransform:"uppercase",
    borderBottom:"1px solid rgba(255,255,255,.08)"
  },

  td:{
    padding:"16px",
    color:"#dbeafe",
    borderBottom:"1px solid rgba(255,255,255,.06)",
    verticalAlign:"top"
  },

  emptyCell:{
    padding:"28px 16px",
    color:"#94a3b8",
    textAlign:"center"
  },

  statusSelect:{
    width:"130px",
    padding:"10px 12px",
    borderRadius:"10px",
    border:"1px solid rgba(255,255,255,.12)",
    background:"#0f172a",
    color:"white"
  }
};

export default App;
