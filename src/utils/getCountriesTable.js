const getCountries = () => {
  const countryList = 
    '<table><tr><td><p>Afghanistan</p></td><td><p>AF</p></td><td><p>afghani</p></td></tr><tr><td><p>Aland Islands</p></td><td><p>AX</p></td><td><p>euro</p></td></tr><tr><td><p>Albania</p></td><td><p>AL</p></td><td><p>euro</p></td></tr><tr><td><p>Algeria</p></td><td><p>DZ</p></td><td><p>Algerian dinar</p></td></tr><tr><td><p>American Samoa</p></td><td><p>AS</p></td><td><p>US dollar</p></td></tr><tr><td><p>Andorra</p></td><td><p>AD</p></td><td><p>euro</p></td></tr><tr><td><p>Angola</p></td><td><p>AO</p></td><td><p>Angolan kwanza</p></td></tr><tr><td><p>Anguilla</p></td><td><p>AI</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>Antigua and Barbuda</p></td><td><p>AG</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>Argentina</p></td><td><p>AR</p></td><td><p>Argentine peso</p></td></tr><tr><td><p>Armenia</p></td><td><p>AM</p></td><td><p>Armenian dram</p></td></tr><tr><td><p>Aruba</p></td><td><p>AW</p></td><td><p>Aruban guilder/florin</p></td></tr><tr><td><p>Australia</p></td><td><p>AU</p></td><td><p>Australian dollar</p></td></tr><tr><td><p>Austria</p></td><td><p>AT</p></td><td><p>euro</p></td></tr><tr><td><p>Azerbaijan</p></td><td><p>AZ</p></td><td><p>Azerbaijani manat</p></td></tr><tr><td><p>Azores</p></td><td><p>A2</p></td><td><p>euro</p></td></tr><tr><td><p>Bahamas</p></td><td><p>BS</p></td><td><p>Bahamian dollar</p></td></tr><tr><td><p>Bahrain</p></td><td><p>BH</p></td><td><p>Bahraini dinar</p></td></tr><tr><td><p>Bangladesh</p></td><td><p>BD</p></td><td><p>Bangladeshi taka</p></td></tr><tr><td><p>Barbados</p></td><td><p>BB</p></td><td><p>Barbadian dollar</p></td></tr><tr><td><p>Belarus</p></td><td><p>BY</p></td><td><p>Belarusian ruble</p></td></tr><tr><td><p>Belgium</p></td><td><p>BE</p></td><td><p>euro</p></td></tr><tr><td><p>Belize</p></td><td><p>BZ</p></td><td><p>Belizean dollar</p></td></tr><tr><td><p>Benin</p></td><td><p>BJ</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Bermuda</p></td><td><p>BM</p></td><td><p>Bermudian dollar</p></td></tr><tr><td><p>Bhutan</p></td><td><p>BT</p></td><td><p>Bhutanese ngultrum</p></td></tr><tr><td><p>Bolivia</p></td><td><p>BO</p></td><td><p>Bolivian boliviano</p></td></tr><tr><td><p>Bonaire, St. Eustatius, Saba</p></td><td><p>BQ</p></td><td><p>US dollar</p></td></tr><tr><td><p>Bosnia</p></td><td><p>BA</p></td><td><p>Bosnian marka</p></td></tr><tr><td><p>Botswana</p></td><td><p>BW</p></td><td><p>Botswana pula</p></td></tr><tr><td><p>Brazil</p></td><td><p>BR</p></td><td><p>Brazilian real</p></td></tr><tr><td><p>British Virgin Islands</p></td><td><p>VG</p></td><td><p>US dollar</p></td></tr><tr><td><p>Brunei</p></td><td><p>BN</p></td><td><p>Bruneian dollar</p></td></tr><tr><td><p>Bulgaria</p></td><td><p>BG</p></td><td><p>euro</p></td></tr><tr><td><p>Burkina Faso</p></td><td><p>BF</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Burundi</p></td><td><p>BI</p></td><td><p>Burundi franc</p></td></tr><tr><td><p>Cambodia</p></td><td><p>KH</p></td><td><p>Cambodian riel</p></td></tr><tr><td><p>Cameroon</p></td><td><p>CM</p></td><td><p>CFA franc (BEAC)</p></td></tr><tr><td><p><a id="Canada"></a>Canada</p></td><td><p>CA</p></td><td><p>Canadian dollar</p></td></tr><tr><td><p>Canary Islands</p></td><td><p>IC</p></td><td><p>euro</p></td></tr><tr><td><p>Cape Verde Island</p></td><td><p>CV</p></td><td><p>Cape Verdean escudo</p></td></tr><tr><td><p>Cayman Islands</p></td><td><p>KY</p></td><td><p>Caymanian dollar</p></td></tr><tr><td><p>Central African Republic</p></td><td><p>CF</p></td><td><p>CFA franc (BEAC)</p></td></tr><tr><td><p>Ceuta</p></td><td><p>XC</p></td><td><p>euro</p></td></tr><tr><td><p>Chad</p></td><td><p>TD</p></td><td><p>CFA franc (BEAC)</p></td></tr><tr><td><p>Chile</p></td><td><p>CL</p></td><td><p>Chilean peso</p></td></tr><tr><td><p>China, People’s Republic of</p></td><td><p>CN</p></td><td><p>Yuan Renminbi</p></td></tr><tr><td><p>Colombia</p></td><td><p>CO</p></td><td><p>Colombian peso</p></td></tr><tr><td><p>Comoros</p></td><td><p>KM</p></td><td><p>Comoran franc</p></td></tr><tr><td><p>Congo</p></td><td><p>CG</p></td><td><p>CFA franc (BEAC)</p></td></tr><tr><td><p>Congo, The Democratic Republic of</p></td><td><p>CD</p></td><td><p>Congolese franc</p></td></tr><tr><td><p>Cook Islands</p></td><td><p>CK</p></td><td><p>New Zealand dollar</p></td></tr><tr><td><p>Costa Rica</p></td><td><p>CR</p></td><td><p>Costa Rican colon</p></td></tr><tr><td><p>Croatia</p></td><td><p>HR</p></td><td><p>euro</p></td></tr><tr><td><p><a id="Cuba_IATA_Code"></a>Cuba</p></td><td><p>CU</p></td><td><p>Cuban Peso</p></td></tr><tr><td><p>Curacao</p></td><td><p>CW</p></td><td><p>US dollar</p></td></tr><tr><td><p>Cyprus</p></td><td><p>CY</p></td><td><p>euro</p></td></tr><tr><td><p>Czech Republic</p></td><td><p>CZ</p></td><td><p>Czech koruna</p></td></tr><tr><td><p>Denmark</p></td><td><p>DK</p></td><td><p>Danish krone</p></td></tr><tr><td><p>Djibouti</p></td><td><p>DJ</p></td><td><p>Djiboutian franc</p></td></tr><tr><td><p>Dominica</p></td><td><p>DM</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>Dominican Republic</p></td><td><p>DO</p></td><td><p>Dominican peso</p></td></tr><tr><td><p>East Timor</p></td><td><p>TL</p></td><td><p>US dollar</p></td></tr><tr><td><p>Ecuador</p></td><td><p>EC</p></td><td><p>US dollar</p></td></tr><tr><td><p>Egypt</p></td><td><p>EG</p></td><td><p>Egyptian pound</p></td></tr><tr><td><p>El Salvador</p></td><td><p>SV</p></td><td><p>US dollar</p></td></tr><tr><td><p>England</p></td><td><p>EN</p></td><td><p>British pound</p></td></tr><tr><td><p>Equatorial Guinea</p></td><td><p>GQ</p></td><td><p>CFA franc (BEAC)</p></td></tr><tr><td><p>Eritrea</p></td><td><p>ER</p></td><td><p>Eritrean nakfa</p></td></tr><tr><td><p>Estonia</p></td><td><p>EE</p></td><td><p>euro</p></td></tr><tr><td><p>Ethiopia</p></td><td><p>ET</p></td><td><p>Ethiopian birr</p></td></tr><tr><td><p>Europe</p></td><td><p>EP</p></td><td><p>euro</p></td></tr><tr><td><p>Faroe Islands</p></td><td><p>FO</p></td><td><p>Danish krone</p></td></tr><tr><td><p>Fiji</p></td><td><p>FJ</p></td><td><p>Fijian dollar</p></td></tr><tr><td><p>Finland</p></td><td><p>FI</p></td><td><p>euro</p></td></tr><tr><td><p>France</p></td><td><p>FR</p></td><td><p>euro</p></td></tr><tr><td><p>French Guiana</p></td><td><p>GF</p></td><td><p>euro</p></td></tr><tr><td><p>French Polynesia</p></td><td><p>PF</p></td><td><p>CFP franc</p></td></tr><tr><td><p>Gabon</p></td><td><p>GA</p></td><td><p>CFA franc (BEAC)</p></td></tr><tr><td><p>Gambia</p></td><td><p>GM</p></td><td><p>Gambian dalasi</p></td></tr><tr><td><p>Georgia</p></td><td><p>GE</p></td><td><p>Georgian lari</p></td></tr><tr><td><p>Germany</p></td><td><p>DE</p></td><td><p>euro</p></td></tr><tr><td><p>Ghana</p></td><td><p>GH</p></td><td><p>Ghana cedi</p></td></tr><tr><td><p>Gibraltar</p></td><td><p>GI</p></td><td><p>Gibraltar pound</p></td></tr><tr><td><p>Greece</p></td><td><p>GR</p></td><td><p>euro</p></td></tr><tr><td><p>Greenland</p></td><td><p>GL</p></td><td><p>Danish krone</p></td></tr><tr><td><p>Grenada</p></td><td><p>GD</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>Guadeloupe</p></td><td><p>GP</p></td><td><p>euro</p></td></tr><tr><td><p>Guam</p></td><td><p>GU</p></td><td><p>US dollar</p></td></tr><tr><td><p>Guatemala</p></td><td><p>GT</p></td><td><p>Guatemalan quetzal</p></td></tr><tr><td><p>Guernsey</p></td><td><p>GG</p></td><td><p>British pound</p></td></tr><tr><td><p>Guinea</p></td><td><p>GN</p></td><td><p>Guinean franc</p></td></tr><tr><td><p>Guinea-Bissau</p></td><td><p>GW</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Guyana</p></td><td><p>GY</p></td><td><p>Guyanese dollar</p></td></tr><tr><td><p>Haiti</p></td><td><p>HT</p></td><td><p>Haitian gourde</p></td></tr><tr><td><p>Holland</p></td><td><p>HO</p></td><td><p>euro</p></td></tr><tr><td><p>Honduras</p></td><td><p>HN</p></td><td><p>Honduran lempira</p></td></tr><tr><td><p>Hong Kong</p></td><td><p>HK</p></td><td><p>Hong Kong dollar</p></td></tr><tr><td><p>Hungary</p></td><td><p>HU</p></td><td><p>Hungarian forint</p></td></tr><tr><td><p>Iceland</p></td><td><p>IS</p></td><td><p>Icelandic krona</p></td></tr><tr><td><p>India</p></td><td><p>IN</p></td><td><p>Indian rupee</p></td></tr><tr><td><p>Indonesia</p></td><td><p>ID</p></td><td><p>Indonesian rupiah</p></td></tr><tr><td><p>Iraq</p></td><td><p>IQ</p></td><td><p>Iraqi dinar</p></td></tr><tr><td><p>Ireland, Republic of</p></td><td><p>IE</p></td><td><p>euro</p></td></tr><tr><td><p>Israel</p></td><td><p>IL</p></td><td><p>Israeli shekel</p></td></tr><tr><td><p>Italy</p></td><td><p>IT</p></td><td><p>euro</p></td></tr><tr><td><p>Ivory Coast</p></td><td><p>CI</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Jamaica</p></td><td><p>JM</p></td><td><p>Jamaican dollar</p></td></tr><tr><td><p>Japan</p></td><td><p>JP</p></td><td><p>Japanese yen</p></td></tr><tr><td><p>Jersey</p></td><td><p>JE</p></td><td><p>British pound</p></td></tr><tr><td><p>Jordan</p></td><td><p>JO</p></td><td><p>Jordanian dinar</p></td></tr><tr><td><p>Kazakhstan</p></td><td><p>KZ</p></td><td><p>Kazakh tenge</p></td></tr><tr><td><p>Kenya</p></td><td><p>KE</p></td><td><p>Kenyan shilling</p></td></tr><tr><td><p>Kiribati</p></td><td><p>KI</p></td><td><p>Australian dollar</p></td></tr><tr><td><p>Korea, South</p></td><td><p>KR</p></td><td><p>South Korean won</p></td></tr><tr><td><p>Kosovo</p></td><td><p>KV</p></td><td><p>euro</p></td></tr><tr><td><p>Kosrae</p></td><td><p>KO</p></td><td><p>US dollar</p></td></tr><tr><td><p>Kuwait</p></td><td><p>KW</p></td><td><p>Kuwaiti dinar</p></td></tr><tr><td><p>Kyrgyzstan</p></td><td><p>KG</p></td><td><p>Kyrgyz som</p></td></tr><tr><td><p>Laos</p></td><td><p>LA</p></td><td><p>Laotian kip</p></td></tr><tr><td><p><a id="Latvia_EUR"></a>Latvia</p></td><td><p>LV</p></td><td><p>euro</p></td></tr><tr><td><p>Lebanon</p></td><td><p>LB</p></td><td><p>Lebanese pound</p></td></tr><tr><td><p>Lesotho</p></td><td><p>LS</p></td><td><p>Lesotho loti</p></td></tr><tr><td><p>Liberia</p></td><td><p>LR</p></td><td><p>Liberian dollar</p></td></tr><tr><td><p>Libya</p></td><td><p>LY</p></td><td><p>Libyan dinar</p></td></tr><tr><td><p>Liechtenstein</p></td><td><p>LI</p></td><td><p>Swiss franc</p></td></tr><tr><td><p>Lithuania</p></td><td><p>LT</p></td><td><p>euro</p></td></tr><tr><td><p>Luxembourg</p></td><td><p>LU</p></td><td><p>euro</p></td></tr><tr><td><p>Macau</p></td><td><p>MO</p></td><td><p>Macanese patacca</p></td></tr><tr><td><p>Macedonia (FYROM)</p></td><td><p>MK</p></td><td><p>euro</p></td></tr><tr><td><p>Madagascar</p></td><td><p>MG</p></td><td><p>Malagasy ariary</p></td></tr><tr><td><p>Madeira</p></td><td><p>M3</p></td><td><p>euro</p></td></tr><tr><td><p>Malawi</p></td><td><p>MW</p></td><td><p>Malawian kwacha</p></td></tr><tr><td><p>Malaysia</p></td><td><p>MY</p></td><td><p>Malaysian ringgit</p></td></tr><tr><td><p>Maldives</p></td><td><p>MV</p></td><td><p>Maldives rufiyaa</p></td></tr><tr><td><p>Mali</p></td><td><p>ML</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Malta</p></td><td><p>MT</p></td><td><p>euro</p></td></tr><tr><td><p>Marshall Islands</p></td><td><p>MH</p></td><td><p>US dollar</p></td></tr><tr><td><p>Martinique</p></td><td><p>MQ</p></td><td><p>euro</p></td></tr><tr><td><p>Mauritania</p></td><td><p>MR</p></td><td><p>Mauritanian ouguiya</p></td></tr><tr><td><p>Mauritius</p></td><td><p>MU</p></td><td><p>Mauritian rupee</p></td></tr><tr><td><p>Mayotte</p></td><td><p>YT</p></td><td><p>Franc</p></td></tr><tr><td><p>Melilla</p></td><td><p>XL</p></td><td><p>euro</p></td></tr><tr><td><p>Mexico</p></td><td><p>MX</p></td><td><p>Mexican peso</p></td></tr><tr><td><p>Micronesia, Federated States of</p></td><td><p>FM</p></td><td><p>US dollar</p></td></tr><tr><td><p>Moldova</p></td><td><p>MD</p></td><td><p>Moldovan leu</p></td></tr><tr><td><p>Monaco</p></td><td><p>MC</p></td><td><p>euro</p></td></tr><tr><td><p>Mongolia</p></td><td><p>MN</p></td><td><p>Mongolian tugrik</p></td></tr><tr><td><p>Montenegro</p></td><td><p>ME</p></td><td><p>Serbian dinar</p></td></tr><tr><td><p>Montserrat</p></td><td><p>MS</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>Morocco</p></td><td><p>MA</p></td><td><p>Moroccan dirham</p></td></tr><tr><td><p>Mozambique</p></td><td><p>MZ</p></td><td><p>Mozambique metical</p></td></tr><tr><td><p>Namibia</p></td><td><p>NA</p></td><td><p>Namibian dollar</p></td></tr><tr><td><p>Nepal</p></td><td><p>NP</p></td><td><p>Nepalese rupee</p></td></tr><tr><td><p>Netherlands</p></td><td><p>NL</p></td><td><p>euro</p></td></tr><tr><td><p>New Caledonia</p></td><td><p>NC</p></td><td><p>CFP franc</p></td></tr><tr><td><p>New Zealand</p></td><td><p>NZ</p></td><td><p>New Zealand dollar</p></td></tr><tr><td><p>Nicaragua</p></td><td><p>NI</p></td><td><p>Nicaraguan gold cordoba</p></td></tr><tr><td><p>Niger</p></td><td><p>NE</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Nigeria</p></td><td><p>NG</p></td><td><p>Nigerian naira</p></td></tr><tr><td><p>Norfolk Island</p></td><td><p>NF</p></td><td><p>Australian dollar</p></td></tr><tr><td><p>Northern Ireland</p></td><td><p>NB</p></td><td><p>British pound</p></td></tr><tr><td><p>Northern Mariana Islands</p></td><td><p>MP</p></td><td><p>US dollar</p></td></tr><tr><td><p>Norway</p></td><td><p>NO</p></td><td><p>Norwegian krone</p></td></tr><tr><td><p>Oman</p></td><td><p>OM</p></td><td><p>Omani rial</p></td></tr><tr><td><p>Pakistan</p></td><td><p>PK</p></td><td><p>Pakistani rupee</p></td></tr><tr><td><p>Palau</p></td><td><p>PW</p></td><td><p>US dollar</p></td></tr><tr><td><p>Panama</p></td><td><p>PA</p></td><td><p>Panamanian balboa</p></td></tr><tr><td><p>Papua New Guinea</p></td><td><p>PG</p></td><td><p>Papuan kina</p></td></tr><tr><td><p>Paraguay</p></td><td><p>PY</p></td><td><p>Paraguay guarani</p></td></tr><tr><td><p>Peru</p></td><td><p>PE</p></td><td><p>Peruvian nuevo sol</p></td></tr><tr><td><p><a id="Philippines_Currency_Code"></a>Philippines</p></td><td><p>PH</p></td><td><p>Philippine peso</p></td></tr><tr><td><p>Poland</p></td><td><p>PL</p></td><td><p>Polish zloty</p></td></tr><tr><td><p>Ponape</p></td><td><p>PO</p></td><td><p>US dollar</p></td></tr><tr><td><p>Portugal</p></td><td><p>PT</p></td><td><p>euro</p></td></tr><tr><td><p>Puerto Rico</p></td><td><p>PR</p></td><td><p>US dollar</p></td></tr><tr><td><p>Qatar</p></td><td><p>QA</p></td><td><p>Qatari riyal</p></td></tr><tr><td><p>Reunion</p></td><td><p>RE</p></td><td><p>euro</p></td></tr><tr><td><p>Romania</p></td><td><p>RO</p></td><td><p>Romanian leu</p></td></tr><tr><td><p>Rota</p></td><td><p>RT</p></td><td><p>US dollar</p></td></tr><tr><td><p>Russia</p></td><td><p>RU</p></td><td><p>Russian ruble</p></td></tr><tr><td><p>Rwanda</p></td><td><p>RW</p></td><td><p>Rwandan franc</p></td></tr><tr><td><p>Saba</p></td><td><p>S1</p></td><td><p>Netherlands Antillean guilder</p></td></tr><tr><td><p>Saipan</p></td><td><p>SP</p></td><td><p>US dollar</p></td></tr><tr><td><p>Samoa</p></td><td><p>WS</p></td><td><p>Samoan tala</p></td></tr><tr><td><p>San Marino</p></td><td><p>SM</p></td><td><p>euro</p></td></tr><tr><td><p>Sao Tome and Principe</p></td><td><p>ST</p></td><td><p>Sao Tome and Principe dobra</p></td></tr><tr><td><p>Saudi Arabia</p></td><td><p>SA</p></td><td><p>Saudi riyal</p></td></tr><tr><td><p>Scotland</p></td><td><p>SF</p></td><td><p>British pound</p></td></tr><tr><td><p>Senegal</p></td><td><p>SN</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Serbia</p></td><td><p>RS</p></td><td><p>Serbian dinar</p></td></tr><tr><td><p>Seychelles</p></td><td><p>SC</p></td><td><p>Seychelles rupee</p></td></tr><tr><td><p>Sierra Leone</p></td><td><p>SL</p></td><td><p>Sierra Leone leone</p></td></tr><tr><td><p>Singapore</p></td><td><p>SG</p></td><td><p>Singapore dollar</p></td></tr><tr><td><p>Slovakia</p></td><td><p>SK</p></td><td><p>euro</p></td></tr><tr><td><p>Slovenia</p></td><td><p>SI</p></td><td><p>euro</p></td></tr><tr><td><p>Solomon Islands</p></td><td><p>SB</p></td><td><p>Solomon Islands dollar</p></td></tr><tr><td><p>South Africa</p></td><td><p>ZA</p></td><td><p>South African rand</p></td></tr><tr><td><p>Spain</p></td><td><p>ES</p></td><td><p>euro</p></td></tr><tr><td><p>Sri Lanka</p></td><td><p>LK</p></td><td><p>Sri Lankan rupee</p></td></tr><tr><td><p>St. Barthelemy</p></td><td><p>BL</p></td><td><p>euro</p></td></tr><tr><td><p>St. Christopher</p></td><td><p>SW</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>St. Croix</p></td><td><p>C3</p></td><td><p>US dollar</p></td></tr><tr><td><p>St. Eustatius</p></td><td><p>E2</p></td><td><p>Netherlands Antillean guilder</p></td></tr><tr><td><p>St. John</p></td><td><p>UV</p></td><td><p>US dollar</p></td></tr><tr><td><p>St. Kitts and Nevis</p></td><td><p>KN</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>St. Lucia</p></td><td><p>LC</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>St. Maarten and St. Martin</p></td><td><p>SX</p></td><td><p>US dollar</p></td></tr><tr><td><p>St. Thomas</p></td><td><p>VL</p></td><td><p>US dollar</p></td></tr><tr><td><p>St. Vincent and the Grenadines</p></td><td><p>VC</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>Suriname</p></td><td><p>SR</p></td><td><p>Surinamese guilder</p></td></tr><tr><td><p>Swaziland</p></td><td><p>SZ</p></td><td><p>Swaziland lilangeni</p></td></tr><tr><td><p>Sweden</p></td><td><p>SE</p></td><td><p>Swedish krona</p></td></tr><tr><td><p>Switzerland</p></td><td><p>CH</p></td><td><p>Swiss franc</p></td></tr><tr><td><p>Tahiti</p></td><td><p>TA</p></td><td><p>CFP franc</p></td></tr><tr><td><p>Taiwan</p></td><td><p>TW</p></td><td><p>Taiwanese dollar</p></td></tr><tr><td><p>Tajikistan</p></td><td><p>TJ</p></td><td><p>Tajikistan somoni</p></td></tr><tr><td><p>Tanzania</p></td><td><p>TZ</p></td><td><p>Tanzanian shilling</p></td></tr><tr><td><p>Thailand</p></td><td><p>TH</p></td><td><p>Thai baht</p></td></tr><tr><td><p>Tinian</p></td><td><p>TI</p></td><td><p>US dollar</p></td></tr><tr><td><p>Togo</p></td><td><p>TG</p></td><td><p>CFA franc BCEAO</p></td></tr><tr><td><p>Tonga</p></td><td><p>TO</p></td><td><p>Tongan paanga</p></td></tr><tr><td><p>Tortola</p></td><td><p>ZZ</p></td><td><p>US dollar</p></td></tr><tr><td><p>Trinidad and Tobago</p></td><td><p>TT</p></td><td><p>Trinidad and Tobago dollar</p></td></tr><tr><td><p>Truk</p></td><td><p>TU</p></td><td><p>US dollar</p></td></tr><tr><td><p>Tunisia</p></td><td><p>TN</p></td><td><p>Tunisian dinar</p></td></tr><tr><td><p>Turkey</p></td><td><p>TR</p></td><td><p>Turkish lira</p></td></tr><tr><td><p>Turkmenistan</p></td><td><p>TM</p></td><td><p>Turkmenistan manat</p></td></tr><tr><td><p>Turks and Caicos Islands</p></td><td><p>TC</p></td><td><p>US dollar</p></td></tr><tr><td><p>Tuvalu</p></td><td><p>TV</p></td><td><p>Australian dollar</p></td></tr><tr><td><p>U.S. Virgin Islands</p></td><td><p>VI</p></td><td><p>US dollar</p></td></tr><tr><td><p>Uganda</p></td><td><p>UG</p></td><td><p>Ugandan shilling</p></td></tr><tr><td><p>Ukraine</p></td><td><p>UA</p></td><td><p>Ukrainian hryvnia</p></td></tr><tr><td><p>Union Island</p></td><td><p>UI</p></td><td><p>East Caribbean dollar</p></td></tr><tr><td><p>United Arab Emirates</p></td><td><p>AE</p></td><td><p>Emirati dirham</p></td></tr><tr><td><p>United Kingdom</p></td><td><p>GB</p></td><td><p>British pound</p></td></tr><tr><td><p><a id="United_States"></a>United States</p></td><td><p>US</p></td><td><p>US dollar</p></td></tr><tr><td><p>Uruguay</p></td><td><p>UY</p></td><td><p>Uruguayan peso</p></td></tr><tr><td><p>Uzbekistan</p></td><td><p>UZ</p></td><td><p>Uzbekistani som</p></td></tr><tr><td><p>Vanuatu</p></td><td><p>VU</p></td><td><p>Vanuatuan vatu</p></td></tr><tr><td><p>Vatican City State</p></td><td><p>VA</p></td><td><p>euro</p></td></tr><tr><td><p>Venezuela</p></td><td><p>VE</p></td><td><p>Venezuelan bolivar</p></td></tr><tr><td><p>Vietnam</p></td><td><p>VN</p></td><td><p>Vietnamese dong</p></td></tr><tr><td><p>Virgin Gorda</p></td><td><p>VR</p></td><td><p>US dollar</p></td></tr><tr><td><p>Wales</p></td><td><p>WL</p></td><td><p>British pound</p></td></tr><tr><td><p>Wallis and Futuna Islands</p></td><td><p>WF</p></td><td><p>CFP franc</p></td></tr><tr><td><p>Yap</p></td><td><p>YA</p></td><td><p>US dollar</p></td></tr><tr><td><p>Yemen</p></td><td><p>YE</p></td><td><p>Yemeni rial</p></td></tr><tr><td><p>Zambia</p></td><td><p>ZM</p></td><td><p>Zambian kwacha</p></td></tr><tr><td><p>Zimbabwe</p></td><td><p>ZW</p></td><td><p>Zimbabwean dollar</p></td></tr></table>';
  return countryList;
};

export default getCountries;