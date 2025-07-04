const locationData = {
  "ঢাকা (Dhaka)": {
    // ঢাকা জেলা
    "ঢাকা (Dhaka)": {
      "সাভার (Savar)": {
        "আমিনবাজার (Aminbazar)": {
          "আমিনবাজার (Aminbazar)": [
            "চকবাজার (Chakbazar)",
            "শাহীবাগ (Shaheebag)"
          ]
        },
        "পাথালিয়া (Pathalia)": {
          "পাথালিয়া (Pathalia)": [
            "চৌরাবাড়ি (Chourabari)",
            "শিমুলিয়া (Shimulia)"
          ]
        }
      },
      "কেরানীগঞ্জ (Keraniganj)": {
        "আগানগর (Aganagar)": {
          "আগানগর (Aganagar)": [
            "আগানগর পূর্ব (East Aganagar)",
            "আগানগর পশ্চিম (West Aganagar)"
          ]
        },
        "কালিন্দী (Kalindi)": {
          "কালিন্দী (Kalindi)": [
            "জিনজিরা (Jinjira)",
            "ধলেশ্বরী (Dholeswari)"
          ]
        }
      },
      "দোহার (Dohar)": {
        "নারিশা (Narisha)": {
          "নারিশা (Narisha)": [
            "বালিয়া (Balia)",
            "শ্রীনগর (Sreenagar)"
          ]
        },
        "মহম্মদপুর (Mohammadpur)": {
          "মহম্মদপুর (Mohammadpur)": [
            "চরকুশুমহাটি (Char Kushumhati)",
            "জয়পাড়া (Joypara)"
          ]
        }
      },
      "নবাবগঞ্জ (Nawabganj)": {
        "বান্দুরা (Bandura)": {
          "বান্দুরা (Bandura)": [
            "বাঘমারা (Baghmara)",
            "মহব্বতপুর (Mohabbatpur)"
          ]
        },
        "শিকারীপাড়া (Shikarpur)": {
          "শিকারীপাড়া (Shikarpur)": [
            "বড়গাঁও (Borgao)",
            "চাঁদপুর (Chandpur)"
          ]
        }
      },
      "ধামরাই (Dhamrai)": {
        "কালামপুর (Kalampur)": {
          "কালামপুর (Kalampur)": [
            "সাহাপুর (Sahapur)",
            "বনগ্রাম (Bongram)"
          ]
        },
        "সূয়াপুর (Suapur)": {
          "সূয়াপুর (Suapur)": [
            "কাঞ্চনপুর (Kanchanpur)",
            "মোড়াগাঁও (Moragao)"
          ]
        }
      }
      
      
      
      
      
      
      
      
      
      
      
      // ... ঢাকা জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    
    // গাজীপুর জেলা
    "গাজীপুর (Gazipur)": {
      "কাপাসিয়া (Kapasia)": {
        "কাপাসিয়া সদর (Kapasia Sadar)": {
          "কাপাসিয়া (Kapasia)": [
            "নতুন বাজার (Notun Bazar)",
            "পুরানা বাজার (Purana Bazar)"
          ]
        },
        "টোক (Tok)": {
          "টোক (Tok)": [
            "শালদা (Shalda)",
            "চরটিয়া (Chartia)"
          ]
        }
      },
      "কালীগঞ্জ (Kaliganj)": {
        "কালীগঞ্জ সদর (Kaliganj Sadar)": {
          "কালীগঞ্জ (Kaliganj)": [
            "চানপুর (Chanpur)",
            "চাঁদপুর (Chandpur)"
          ]
        },
        "নাগরী (Nagari)": {
          "নাগরী (Nagari)": [
            "দুর্গাপুর (Durgapur)",
            "মহাদেবপুর (Mahadebpur)"
          ]
        }
      },
      "শ্রীপুর (Sreepur)": {
        "শ্রীপুর (Sreepur)": {
          "শ্রীপুর (Sreepur)": [
            "মাওনা (Maona)",
            "ভাংনাহাটি (Vangnahati)"
          ]
        },
        "গাজীপুরা (Gazipura)": {
          "গাজীপুরা (Gazipura)": [
            "কেশরিতা (Keshorita)",
            "চান্দনা (Chandana)"
          ]
        }
      },
      "গাজীপুর সদর (Gazipur Sadar)": {
        "গাজীপুর সিটি কর্পোরেশন": {
          "টঙ্গী (Tongi)": [
            "টঙ্গী পূর্ব (Tongi East)",
            "টঙ্গী পশ্চিম (Tongi West)"
          ]
        }
      },
      "কালিয়াকৈর (Kaliakair)": {
        "কালিয়াকৈর (Kaliakair)": {
          "কালিয়াকৈর (Kaliakair)": [
            "চন্দ্রা (Chandra)",
            "মৌচাক (Mouchak)"
          ]
        }
      }
      
      
      
      
      
      
      
      
      // ... গাজীপুর জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    
    // নারায়ণগঞ্জ জেলা
    "নারায়ণগঞ্জ (Narayanganj)": {
      "নারায়ণগঞ্জ সদর (Narayanganj Sadar)": {
        "ফতুল্লা (Fatullah)": {
          "ফতুল্লা (Fatullah)": [
            "চৌফেরী (Chouferi)",
            "বাঁশতলা (Banshtola)"
          ]
        },
        "দুইপাড়া (Duipara)": {
          "দুইপাড়া (Duipara)": [
            "দুইপাড়া উত্তর (Duipara North)",
            "দুইপাড়া দক্ষিণ (Duipara South)"
          ]
        }
      },
      "সোনারগাঁও (Sonargaon)": {
        "জামপুর (Jampur)": {
          "জামপুর (Jampur)": [
            "জামপুর (Jampur Village)",
            "নতুন বাজার (Notun Bazar)"
          ]
        },
        "কাঁচপুর (Kanchpur)": {
          "কাঁচপুর (Kanchpur)": [
            "কাঁচপুর পূর্ব (Kanchpur East)",
            "কাঁচপুর পশ্চিম (Kanchpur West)"
          ]
        }
      },
      "বান্দর (Bandar)": {
        "ভূলতা (Bhulta)": {
          "ভূলতা (Bhulta)": [
            "ভূলতা উত্তর (Bhulta North)",
            "ভূলতা দক্ষিণ (Bhulta South)"
          ]
        },
        "মুরাপাড়া (Murapara)": {
          "মুরাপাড়া (Murapara)": [
            "মুরাপাড়া বাজার (Murapara Bazar)",
            "নতুনপুর (Notunpur)"
          ]
        }
      },
      "আড়াইহাজার (Araihazar)": {
        "ফতেপুর (Fatehpur)": {
          "ফতেপুর (Fatehpur)": [
            "ফতেপুর বাজার (Fatehpur Bazar)",
            "পুরান পাড়া (Puran Para)"
          ]
        },
        "দুপ্তারা (Duptara)": {
          "দুপ্তারা (Duptara)": [
            "দুপ্তারা পূর্ব (Duptara East)",
            "দুপ্তারা ডিগ্রি কলেজ এলাকা (Duptara Degree College Area)"
          ]
        }
      },
      "রূপগঞ্জ (Rupganj)": {
        "গুলিস্তান (Gulistan)": {
          "গুলিস্তান (Gulistan)": [
            "গুলিস্তান পূর্ব (Gulistan East)",
            "গুলিস্তান পশ্চিম (Gulistan West)"
          ]
        },
        "কালাচাঁদপুর (Kalachandpur)": {
          "কালাচাঁদপুর (Kalachandpur)": [
            "কালাচাঁদপুর বাজার (Kalachandpur Bazar)",
            "নতুনপাড়া (Notunpara)"
          ]
        }
      }
    // ... নারায়ণগঞ্জ জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    
    
    // মুন্সীগঞ্জ জেলা
    "মুন্সিগঞ্জ (Munshiganj)": {
      "মুন্সিগঞ্জ সদর (Munshiganj Sadar)": {
        "আধারা (Adhara)": {
          "আধারা (Adhara)": [
            "চাগলনকুল (Chagolnakhul)",
            "রামচন্ডপুর (Ramchandrapur)"
          ]
        },
        "বজ্রাজোগিনী (Bajra Jogini)": {
          "বজ্রাজোগিনী (Bajra Jogini)": [
            "বজ্রাজোগিনী পূর্ব (Bajra Jogini East)",
            "বজ্রাজোগিনী পশ্চিম (Bajra Jogini West)"
          ]
        }
      },
      "গজারিয়া (Gazaria)": {
        "বৌসিয়া (Bausia)": {
          "বৌসিয়া (Bausia)": [
            "পূর্ব বৌসিয়া (East Bausia)",
            "পশ্চিম বৌসিয়া (West Bausia)"
          ]
        },
        "নায়কামতি (Nayakamdi)": {
          "নায়কামতি (Nayakamdi)": [
            "নায়াকামতি (Nayakamdi Village)"
          ]
        }
      },
      "টঙ্গিবাড়ি (Tongibari)": {
        "বেতকা (Betka)": {
          "বেতকা (Betka)": [
            "উত্তর বেতকা (North Betka)",
            "দক্ষিণ বেতকা (South Betka)"
          ]
        }
      },
      "লোহাজাং (Lohajang)": {
        "কুমারভোগ (Kumarbhog)": {
          "কুমারভোগ (Kumarbhog)": [
            "পশ্চিম কুমারভোগ (West Kumarbhog)",
            "উত্তর কুমারভোগ (North Kumarbhog)"
          ]
        }
      },
      "সিরাজদিখান (Sirajdikhan)": {
        "গোপালপুর (Gopalpur)": {
          "গোপালপুর (Gopalpur)": [
            "গোপালপুর (Gopalpur Village)"
          ]
        }
      },
      "শ্রীনগর (Sreenagar)": {
        "অন্য ইউনিয়ন": {
          "শ্রীনগর পোস্ট": [
            "গ্রাম A", "গ্রাম B"
          ]
        }
      }
      
    
    
    // ... মুন্সীগঞ্জ জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    //গোপালগঞ্জ জেলা শুরু
    "গোপালগঞ্জ (Gopalganj)": {
      "গোপালগঞ্জ সদর (Gopalganj Sadar)": {
        "ঘিয়াণঘাট (Ghialgachha)": {
          "ঘিয়াণঘাট (Ghialgachha)": [
            "ঘিয়াণঘাট (Ghialgachha Village)",
            "নন্দীগ্রাম (Nandigram)"
          ]
        },
        "রায়মোহনকাঁঠি (Raymhonkathi)": {
          "রায়মোহন (Raimohon)": [
            "রায়মোহনকাঁঠি (Raimohon Kathi Village)",
            "তালতলা (Taltala)"
          ]
        }
      },
      "কোটালীপাড়া (Kotalipara)": {
        "কোটালীপাড়া (Kotalipara)": {
          "কোটালীপাড়া (Kotalipara)": [
            "শাহপাড়া (Shahpara)",
            "চরবরদিশ (Charbardish)"
          ]
        },
        "ভোদই (Bhodia)": {
          "ভোদই (Bhodia)": [
            "ভোদই (Bhodia Village)",
            "মুকসিদ পাড়া (Muksid Para)"
          ]
        }
      },
      "টুঙ্গিপাড়া (Tungipara)": {
        "টুঙ্গিপাড়া (Tungipara)": {
          "টুঙ্গিপাড়া (Tungipara)": [
            "টুঙ্গিপাড়া (Tungipara Village)"
          ]
        }
      },
      
      "মুকসুদপুর (Muksudpur)": {
        "উজানি (Ujani Union)": {
          "উজানি (Ujani)": [
            "উজানি (Ujani Village)"
          ]
        },
        "কাশালিয়া (Kasalia Union)": {
          "কাশালিয়া (Kasalia)": [
            "কাশালিয়া (Kasalia Village)"
          ]
        },
        "খান্দারপাড়া (Khandarpar Union)": {
          "খান্দারপাড়া (Khandarpar)": [
            "খান্দারপাড়া (Khandarpar Village)"
          ]
        },
        "গোবিন্দপুর (Gobindapur Union)": {
          "গোবিন্দপুর (Gobindapur)": [
            "গোবিন্দপুর (Gobindapur Village)"
          ]
        },
        "ভাষবাড়িয়া (Banshbaria Union)": {
          "ভাষবাড়িয়া (Banshbaria)": [
            "ভাষবাড়িয়া (Banshbaria Village)"
          ]
        },
        "বহুগ্রাম (Bahugram Union)": {
          "বহুগ্রাম (Bahugram)": [
            "বহুগ্রাম (Bahugram Village)"
          ]
        },
        "বাটিকামারি (Batikamari Union)": {
          "বাটিকামারি (Batikamari)": [
            "বাটিকামারি (Batikamari Village)"
          ]
        },
        "ভাবড়াশুর (Bhabrasur Union)": {
          "ভাবড়াশুর (Bhabrasur)": [
            "ভাবড়াশুর (Bhabrasur Village)"
          ]
        },
        "মহারাজপুর (Maharajpur Union)": {
          "মহারাজপুর (Maharajpur)": [
            "মহারাজপুর (Maharajpur Village)"
          ]
        },//মহারাজপুর ইউনিয়ন শেষ
        "মোচনা (Mochna Union)": {
          
          "মোচনা (Mochna)": [
            "মোচনা (Mochna Village)"
          ],
          "আইকদিয়া (Aikdia)": [
            "পাইকদিয়া (Paikdia)",
            "আইকদিয়া (Aikdia)"
          ]
        },//মোচনা ইউনিয়ন শেষ
        "নানিকশির (Nanikshir Union)": {
          "নানিকশির (Nanikshir)": [
            "নানিকশির (Nanikshir Village)"
          ]
        },
        "পাশারগতি (Pasargati Union)": {
          "পাশারগতি (Pasargati)": [
            "পাশারগতি (Pasargati Village)"
          ]
        },
        "রাঘদি (Raghdi Union)": {
          "রাঘদি (Raghdi)": [
            "রাঘদি (Raghdi Village)"
          ]
        },
        "জলিরপাড়া (Jalirpar Union)": {
          "জলিরপাড়া (Jalirpar)": [
            "জলিরপাড়া (Jalirpar Village)"
          ]
        },
        "ডিঘ্নগর (Dignagar Union)": {
          "ডিঘ্নগর (Dignagar)": [
            "ডিঘ্নগর (Dignagar Village)"
          ]
        }
      },
      //মুকসুদপুর উপজেলা শেষ
      //কাশিয়ানী উপজেলা
      "কাশিয়ানী (Kashiani)": {
        "কাশিয়ানী (Kashiani)": {
          "কাশিয়ানী (Kashiani)": [
            "কাশিয়ানী (Kashiani Village)",
            "চরলেখা (Charlekha)"
          ]
        }
      },//কাশিয়া নিউ উপজেলা শেষ
      
    },//গোপালগঞ্জ জেলা শেষ
    //কিশোরগঞ্জ জেলা শুরু
    "কিশোরগঞ্জ (Kishoreganj)": {
      "কটিয়াদি উপজেলা (Katiadi Upazila)": { // 🏠 উপজেলা: কটিয়াদি
        "লোহাজুরি ইউনিয়ন (Lohajuri Union)": {
          "লোহাজুরি পোস্ট অফিস (Lohajuri Post Office)": [
            "লতিবাবাদ (Latibabad)",
            "দাউদপুর (Daudpur)"
          ]
        }
      },
      "ভৈরব উপজেলা (Bhairab Upazila)": { // 🏠 উপজেলা: ভৈরব
        "সাতবাড়ীয়া ইউনিয়ন (Satbariya Union)": {
          "সাতবাড়ীয়া পোস্ট অফিস (Satbariya Post Office)": [
            "বহেরা (Bohera)",
            "সাতবাড়ীয়া বাজার (Satbariya Bazar)"
          ]
        }
      },
      "হোসেনপুর উপজেলা (Hossainpur Upazila)": { // 🏠 উপজেলা: হোসেনপুর
        "আন্দিয়ারা ইউনিয়ন (Andiara Union)": {
          "আন্দিয়ারা পোস্ট অফিস (Andiara Post Office)": [
            "আন্দিয়ারা (Andiara)",
            "চরকাজলা (Char Kajla)"
          ]
        }
      }
    },//কিশোরগঞ্জ জেলা শেষ
    // টাঙ্গাইল জেলা শুরু
    "টাঙ্গাইল (Tangail)": {
      "টাঙ্গাইল সদর (Tangail Sadar)": {
        "টাঙ্গাইল সদর (Tangail Sadar)": {
          "টাঙ্গাইল সদর (Tangail Sadar)": [
            "ঘারিন্দা (Gharinda)",
            "কাতুলী (Katuli)",
            "হুগড়া (Hugra)",
            "পড়াবাড়ী (Porabari)"
          ]
        }
      },
      "সখিপুর (Sakhipur)": {
        "সখিপুর পৌরসভা (Sakhipur Municipality)": {
          "সখিপুর পৌরসভা (Sakhipur Municipality)": [
            "সখিপুর বাজার (Sakhipur Bazar)",
            "কালিয়া (Kalia)"
          ]
        },
        "যাদবপুর (Jadabpur)": {
          "যাদবপুর (Jadabpur)": [
            "যাদবপুর গ্রাম (Jadabpur Village)",
            "হাতীবান্ধা (Hatibandha)"
          ]
        }
      },
      "ঘাটাইল (Ghatail)": {
        "ঘাটাইল (Ghatail)": {
          "ঘাটাইল (Ghatail)": [
            "রসুলপুর (Rasulpur)",
            "দিগড় (Digar)"
          ]
        }
      },
      "বাসাইল (Basail)": {
        "বাসাইল (Basail)": {
          "বাসাইল (Basail)": [
            "কাশিল (Kashil)",
            "হাবলা (Habla)"
          ]
        }
      },
      "মধুপুর (Madhupur)": {
        "মধুপুর (Madhupur)": {
          "মধুপুর (Madhupur)": [
            "মির্জাবাড়ী (Mirzabari)",
            "শোলাকুড়ি (Sholakuri)"
          ]
        }
      },
      "ভূঞাপুর (Bhuapur)": {
        "ভূঞাপুর (Bhuapur)": {
          "ভূঞাপুর (Bhuapur)": [
            "অর্জুনা (Arjuna)",
            "গোবিন্দাবাসী (Gobindabasi)"
          ]
        }
      },
      "গোপালপুর (Gopalpur)": {
        "গোপালপুর (Gopalpur)": {
          "গোপালপুর (Gopalpur)": [
            "হেমনগর (Hemnagar)",
            "ঝাওয়াইল (Jhaoail)"
          ]
        }
      },
      "দেলদুয়ার (Delduar)": {
        "দেলদুয়ার (Delduar)": {
          "দেলদুয়ার (Delduar)": [
            "আটিয়া (Atia)",
            "পাথরাইল (Pathrail)"
          ]
        }
      },
      "কালিহাতী (Kalihati)": {
        "কালিহাতী (Kalihati)": {
          "কালিহাতী (Kalihati)": [
            "নাগবাড়ী (Nagbari)",
            "বাংড়া (Bangra)"
          ]
        }
      },
      "নাগরপুর (Nagarpur)": {
        "নাগরপুর (Nagarpur)": {
          "নাগরপুর (Nagarpur)": [
            "মামুদনগর (Mamudnagar)",
            "মোকনা (Mokna)"
          ]
        }
      },
      "মির্জাপুর (Mirzapur)": {
        "মির্জাপুর (Mirzapur)": {
          "মির্জাপুর (Mirzapur)": [
            "মহেরা (Mahera)",
            "ফতেপুর (Fatehpur)"
          ]
        }
      },
      "ধানবাড়ী (Dhanbari)": {
        "ধানবাড়ী (Dhanbari)": {
          "ধানবাড়ী (Dhanbari)": [
            "পাইস্কা (Paiska)",
            "মুসুদ্দী (Musuddi)"
          ]
        }
      }
    }, // টাঙ্গাইল জেলা শেষ
      // মাদারীপুর জেলা শুরু
    "মাদারীপুর (Madaripur)": {
      "মাদারীপুর সদর (Madaripur Sadar)": {
        "মাদারীপুর পৌরসভা (Madaripur Municipality)": {
          "মাদারীপুর পৌরসভা (Madaripur Municipality)": [
            "ইটেরপুল (Iterpul)",
            "চৌরাস্তা (Chowrasta)"
          ]
        },
        "খাগদী (Khagdi)": {
          "খাগদী (Khagdi)": [
            "খাগদী পূর্ব (Khagdi East)",
            "খাগদী পশ্চিম (Khagdi West)"
          ]
        },
        "ডাসার (Dasar)": {
          "ডাসার (Dasar)": [
            "দাসার বাজার (Dasar Bazar)",
            "মাইজপাড়া (Maizpara)"
          ]
        }
      },
      "রাজৈর (Rajoir)": {
        "রাজৈর (Rajoir)": {
          "রাজৈর (Rajoir)": [
            "রাজৈর বাজার (Rajoir Bazar)",
            "গোপালপুর (Gopalpur)"
          ]
        },
        "বাড়িখালী (Barikhali)": {
          "বাড়িখালী (Barikhali)": [
            "বাড়িখালী (Barikhali Village)",
            "আটখোলা (Atkhola)"
          ]
        }
      },
      "কালকিনি (Kalkini)": {
        "কালকিনি (Kalkini)": {
          "কালকিনি (Kalkini)": [
            "গোপালপুর (Gopalpur)",
            "চাকরীচর (Chakricher)"
          ]
        },
        "শিকারমঙ্গল (Shikarmangal)": {
          "শিকারমঙ্গল (Shikarmangal)": [
            "শিকারমঙ্গল (Shikarmangal Village)",
            "চরদৌলতখান (Char Daulatkhan)"
          ]
        }
      },
      "শিবচর (Shibchar)": {
        "শিবচর (Shibchar)": {
          "শিবচর (Shibchar)": [
            "শিবচর বাজার (Shibchar Bazar)",
            "উমেদপুর (Umedpur)"
          ]
        },
        "বাঁশগাড়ি (Bhashgari)": {
          "বাঁশগাড়ি (Bhashgari)": [
            "বাঁশগাড়ি পূর্ব (Bhashgari East)",
            "বাঁশগাড়ি পশ্চিম (Bhashgari West)"
          ]
        },
        "পাঁচচর (Panchchar)": {
          "পাঁচচর (Panchchar)": [
            "পাঁচচর (Panchchar Village)",
            "চরজানাজাত (Char Janajat)"
          ]
        }
      }
    }, // মাদারীপুর জেলা শেষ  
      // ফরিদপুর জেলা শুরু
    "ফরিদপুর (Faridpur)": {
      "ফরিদপুর সদর (Faridpur Sadar)": {
        "ফরিদপুর পৌরসভা (Faridpur Municipality)": {
          "ফরিদপুর পৌরসভা (Faridpur Municipality)": [
            "ফরিদপুর শহর এলাকা (Faridpur City Area)",
            "ডেমরা (Demra)"
          ]
        },
        "ফরিদপুর (Faridpur Union)": {
          "ফরিদপুর (Faridpur Union)": [
            "ফরিদপুর গ্রাম (Faridpur Village)",
            "পুংগালি (Pungali)"
          ]
        }
      },
      "আলফাডাঙ্গা (Alfadanga)": {
        "আলফাডাঙ্গা (Alfadanga)": {
          "আলফাডাঙ্গা (Alfadanga)": [
            "আলফাডাঙ্গা গ্রাম (Alfadanga Village)",
            "বানা (Bana)"
          ]
        }
      },
      "সালথা (Saltha)": {
        "সালথা (Saltha)": {
          "সালথা (Saltha)": [
            "আটঘর (Atghar)",
            "বল্লাভদী (Ballabhdi)"
          ]
        }
      },
      "নাগরকান্ডা (Nagarkanda)": {
        "নগরকান্দা (Nagarkanda)": {
          "নগরকান্দা (Nagarkanda)": [
            "চর জোসর্দি (Char Josardi)",
            "ডাঙ্গী (Dangi)"
          ]
        }
      },
      "ভাঙ্গা (Bhanga)": {
        "ভাঙ্গা (Bhanga)": {
          "ভাঙ্গা (Bhanga)": [
            "বিনা উদাহরণ-১",
            "বিনা উদাহরণ-২"
          ]
        }
      },
      "বোয়ালমারী (Boalmari)": {
        "বোয়ালমারী (Boalmari)": {
          "বোয়ালমারী (Boalmari)": [
            "বিনা উদাহরণ-১",
            "বিনা উদাহরণ-২"
          ]
        }
      },
      "চারভদ্রাসন (Charbhadrasan)": {
        "চারভদ্রাসন (Charbhadrasan)": {
          "চারভদ্রাসন (Charbhadrasan)": [
            "বিনা উদাহরণ-১",
            "বিনা উদাহরণ-২"
          ]
        }
      },
      "মধুখালি (Madhukhali)": {
        "মধুখালি (Madhukhali)": {
          "মধুখালি (Madhukhali)": [
            "বিনা উদাহরণ-১",
            "বিনা উদাহরণ-২"
          ]
        }
      },
      "সদরপুর (Sadarpur)": {
        "সদরপুর (Sadarpur)": {
          "সদরপুর (Sadarpur)": [
            "বিনা উদাহরণ-১",
            "বিনা উদাহরণ-২"
          ]
        }
      }
    }, // ফরিদপুর জেলা শেষ  
      // শরীয়তপুর জেলা শুরু
    "শরীয়তপুর (Shariatpur)": {
      "শরীয়তপুর সদর (Shariatpur Sadar)": {
        "শরীয়তপুর পৌরসভা (Shariatpur Municipality)": {
          "শরীয়তপুর পৌরসভা (Shariatpur Municipality)": [
            "শহর এলাকা (City Area)",
            "আটিপাড়া (Atipara)"
          ]
        },
        "পালং (Palong)": {
          "পালং (Palong)": [
            "পালং গ্রাম (Palong Village)",
            "নড়িয়া খাল পাড়া (Naria Khal Para)"
          ]
        },
        "আঙ্গারিয়া (Angaria)": {
          "আঙ্গারিয়া (Angaria)": [
            "আঙ্গারিয়া গ্রাম (Angaria Village)",
            "বৃদ্ধাপন গ্রামের অংশ (Briddhapan Village Part)"
          ]
        }
      },
      "জাজিরা (Zanjira)": {
        "জাজিরা (Zanjira)": {
          "জাজিরা (Zanjira)": [
            "জাজিরা বাজার (Zanjira Bazar)",
            "চরজাজিরা (Char Zanjira)"
          ]
        }
      },
      "নড়িয়া (Naria)": {
        "নড়িয়া (Naria)": {
          "নড়িয়া (Naria)": [
            "নড়িয়া বাজার (Naria Bazar)",
            "চরনড়িয়া (Char Naria)"
          ]
        }
      },
      "ভেদরগঞ্জ (Bhedarganj)": {
        "ভেদরগঞ্জ (Bhedarganj)": {
          "ভেদরগঞ্জ (Bhedarganj)": [
            "ভেদরগঞ্জ বাজার (Bhedarganj Bazar)",
            "চরভেদরগঞ্জ (Char Bhedarganj)"
          ]
        }
      },
      "ডামুডিয়া (Damudya)": {
        "ডামুডিয়া (Damudya)": {
          "ডামুডিয়া (Damudya)": [
            "ডামুডিয়া বাজার (Damudya Bazar)",
            "ঘোড়াটুলা (Ghoratula)"
          ]
        }
      },
      "গোসাইরহাট (Gosairhat)": {
        "গোসাইরহাট (Gosairhat)": {
          "গোসাইরহাট (Gosairhat)": [
            "গোঁসাইরহাট বাজার (Gosairhat Bazar)",
            "চরগোসাইরহাট (Char Gosairhat)"
          ]
        }
      }
    }, // শরীয়তপুর জেলা শেষ

      // রাজবাড়ী জেলা শুরু
    "রাজবাড়ী (Rajbari)": {
      "রাজবাড়ী সদর (Rajbari Sadar)": {
        "রাজবাড়ী পৌরসভা (Rajbari Municipality)": {
          "রাজবাড়ী পৌরসভা (Rajbari Municipality)": [
            "বানিবাহা (Banibaha)",
            "বসন্তপুর (Basantapur)"
          ]
        },
        "আলিপুর (Alipur Union)": {
          "আলিপুর (Alipur)": [
            "আলিপুর গ্রাম (Alipur Village)",
            "পঞ্চুরিয়া (Panchuria)"
          ]
        }
      },
      "গোয়ালন্দ (Goalanda)": {
        "গোয়ালন্দ পৌরসভা (Goalanda Municipality)": {
          "গোয়ালন্দ পৌরসভা (Goalanda Municipality)": [
            "দৌলতদিয়া (Doulatdia)",
            "চিতান (Chitan)"
          ]
        },
        "উজানচর ইউনিয়ন (Uzancar Union)": {
          "উজানচর (Uzancar)": [
            "উজানচর গ্রাম (Uzancar Village)",
            "বেড়িপাড়া (Beripara)"
          ]
        }
      },
      "পাংশা (Pangsha)": {
        "পাংশা পৌরসভা (Pangsha Municipality)": {
          "পাংশা পৌরসভা (Pangsha Municipality)": [
            "পাংশা সদর (Pangsha Sadar)",
            "চরবরা (Char Bara)"
          ]
        },
        "বাঙলাবাড়ী ইউনিয়ন (Banglabari Union)": {
          "বাঙলাবাড়ী (Banglabari)": [
            "বাঙলাবাড়ী গ্রাম (Banglabari Village)",
            "পাইত (Pait)"
          ]
        }
      },
      "বালিয়াকান্দি (Baliakandi)": {
        "বালিয়াকান্দি (Baliakandi)": {
          "বালিয়াকান্দি (Baliakandi)": [
            "বাহারপুর (Baharpur)",
            "জঙ্গল (Jangal)"
          ]
        }
      },
      "কালুখালী (Kalukhali)": {
        "কালুখালী (Kalukhali)": {
          "কালুখালী (Kalukhali)": [
            "বোলাইয়া (Boalia)",
            "মৃদিঘর (Mrigi)"
          ]
        }
      }
    }, // রাজবাড়ী জেলা শেষ  
      // নরসিংদী জেলা শুরু
    "নরসিংদী (Narsingdi)": {
      "নরসিংদী সদর (Narsingdi Sadar)": {
        "নরসিংদী পৌরসভা (Narsingdi Municipality)": {
          "নরসিংদী পৌরসভা (Narsingdi Municipality)": [
            "সিটি সেন্টার (City Center)",
            "মাধবদী হাট (Madhabdi Hat)"
          ]
        },
        "শিলমান্দী (Shilmandi Union)": {
          "শিলমান্দী (Shilmandi)": [
            "শিলমান্দী গ্রাম (Shilmandi Village)",
            "চাষি পাড়ার অংশ (Chashi Para)"
          ]
        },
        "আমদিয়া (Amdia Union)": {
          "আমদিয়া (Amdia)": [
            "আমদিয়া গ্রাম (Amdia Village)",
            "নতুন মহল্লা (Natun Mohalla)"
          ]
        }
      },
      "রায়পুরা (Raipura)": {
        "রায়পুরা পৌরসভা (Raipura Municipality)": {
          "রায়পুরা পৌরসভা (Raipura Municipality)": [
            "রায়পুরা কেন্দ্র (Raipura Center)",
            "পলাশতলী অংশ (Palashtali Area)"
          ]
        },
        "রাধানগর (Radhanagar Union)": {
          "রাধানগর (Radhanagar)": [
            "রাধানগর গ্রাম (Radhanagar Village)",
            "চর রাধান (Char Radhan)"
          ]
        }
      },
      "বেলাবো (Belabo)": {
        "বেলাবো পৌরসভা (Belabo Municipality)": {
          "বেলাবো পৌরসভা (Belabo Municipality)": [
            "বেলাব বাজার (Belabo Bazar)",
            "ইসলামপুর (Islampur)"
          ]
        },
        "আমলাব (Amlaba Union)": {
          "আমলাব (Amlaba)": [
            "আমলাব গ্রাম (Amlaba Village)",
            "নুর আলা পাড়া (Nur Ala Para)"
          ]
        }
      },
      "পলাশ (Palash)": {
        "ঘোড়াশাল পৌরসভা (Ghorashal Municipality)": {
          "ঘোড়াশাল পৌরসভা (Ghorashal Municipality)": [
            "ঘোড়াশাল কেন্দ্র (Ghorashal Center)",
            "নবাবগঞ্জ (Nawabganj)"
          ]
        },
        "গজারিয়া (Gazaria Union)": {
          "গজারিয়া (Gazaria)": [
            "গজারিয়া গ্রাম (Gazaria Village)",
            "চর গজ (Char Gaj)"
          ]
        }
      },
      "মনোহরদী (Monohardi)": {
        "মনোহরদী পৌরসভা (Monohardi Municipality)": {
          "মনোহরদী পৌরসভা (Monohardi Municipality)": [
            "মনোহরদী বাজার (Monohardi Bazar)",
            "চলনচর অংশ (Cholonchar Area)"
          ]
        },
        "খিদিরপুর (Khidirpur Union)": {
          "খিদিরপুর (Khidirpur)": [
            "খিদিরপুর গ্রাম (Khidirpur Village)",
            "পুরাতন বাজার (Puraton Bazar)"
          ]
        }
      },
      "শিবপুর (Shibpur)": {
        "শিবপুর পৌরসভা (Shibpur Municipality)": {
          "শিবপুর পৌরসভা (Shibpur Municipality)": [
            "শিবপুর কেন্দ্র (Shibpur Center)",
            "দুলালপুর অংশ (Dulalpur Area)"
          ]
        },
        "আয়ুবপুর (Ayubpur Union)": {
          "আয়ুবপুর (Ayubpur)": [
            "আয়ুবপুর গ্রাম (Ayubpur Village)",
            "বিজয়নগর (Bijaynagar)"
          ]
        }
      }
    }, // নরসিংদী জেলা শেষ
      // মানিকগঞ্জ জেলা শুরু
    "মানিকগঞ্জ (Manikganj)": {
      "মানিকগঞ্জ সদর (Manikganj Sadar)": {
        "মানিকগঞ্জ পৌরসভা (Manikganj Municipality)": {
          "মানিকগঞ্জ পৌরসভা (Manikganj Municipality)": [
            "সিটি সেন্টার (City Center)",
            "হাটিপাড়া মহল্লা (Hatipara Mohalla)"
          ]
        },
        "দিঘী (Dighi Union)": {
          "দিঘী (Dighi)": [
            "দিঘী গ্রাম (Dighi Village)",
            "শুশুন্ডা (Shushunda)"
          ]
        },
        "বেতিলা-মিতরা (Betila Mitra Union)": {
          "বেতিলা-মিতরা (Betila Mitra)": [
            "বেতিলা (Betila)",
            "মতরণতলী (Motarantoli)"
          ]
        }
      },
      "ঘিওর (Ghior)": {
        "ঘিওর (Ghior Union)": {
          "ঘিওর (Ghior)": [
            "বানিয়াজুরী (Baniyajuri)",
            "বড়টিয়া (Bortia)"
          ]
        }
      },
      "দৌলতপুর (Daulatpur)": {
        "দৌলতপুর (Daulatpur Union)": {
          "দৌলতপুর (Daulatpur)": [
            "বাছামারা (Bachamara)",
            "বাঘুটিয়া (Baghutia)"
          ]
        }
      },
      "সাটুরিয়া (Saturia)": {
        "সাটুরিয়া (Saturia Union)": {
          "সাটুরিয়া (Saturia)": [
            "সাটুরিয়া গ্রাম (Saturia Village)",
            "তিল্লী (Tilli)"
          ]
        }
      },
      "শিবালয় (Shibalaya)": {
        "শিবালয় (Shibalaya Union)": {
          "শিবালয় (Shibalaya)": [
            "মহাদেবপুর (Mahadebpur)",
            "আরুয়া (Arua)"
          ]
        }
      },
      "সিংগাইর (Singair)": {
        "সিংগাইর (Singair Union)": {
          "সিংগাইর (Singair)": [
            "চান্দহর (Chandhar)",
            "তালেবপুর (Talebpur)"
          ]
        },
        "সিংগাইর পৌরসভা (Singair Municipality)": {
          "সিংগাইর পৌরসভা (Singair Municipality)": [
            "টাউন সেন্টার (Town Center)",
            "নগর এলাকা (Urban Area)"
          ]
        }
      },
      "হরিরামপুর (Harirampur)": {
        "হারুকান্দি (Harukandi Union)": {
          "হারুকান্দি (Harukandi)": [
            "হারুকান্দি (Harukandi Village)",
            "লেছড়াগঞ্জ (Lechharaganj)"
          ]
        }
      }
    } // মানিকগঞ্জ জেলা শেষ  
        
        
        
        
        
      },//ঢাকা বিভাগ শেষ
      //  চট্টগ্রাম বিভাগ শুরু 
      "চট্টগ্রাম (Chattogram)": {
        // চট্টগ্রাম জেলা শুরু
    "চট্টগ্রাম (Chittagong)": {
      "মীরসরাই (Mirsharai Upazila)": {
        "মীরসরাই (Mirsharai Union)": {
          "মীরসরাই (Mirsharai)": [
            "জোয়ারগঞ্জ (Joarganj)",
            "কোরেরহাট (Korerhat)"
          ]
        }
      },
      "ফটিকছড়ি (Fatikchhari Upazila)": {
        "ফটিকছড়ি (Fatikchhari Union)": {
          "ফটিকছড়ি (Fatikchhari)": [
            "নাজিরহাট (Najirhat)",
            "নানুপুর (Nanupur)"
          ]
        }
      },
      "সন্দ্বীপ (Sandwip Upazila)": {
        "সন্দ্বীপ (Sandwip Union)": {
          "সন্দ্বীপ (Sandwip)": [
            "উরিরচর (Urir Char)",
            "শিবেরহাট (Shiberhat)"
          ]
        }
      },
      "সীতাকুণ্ড (Sitakunda Upazila)": {
        "সীতাকুণ্ড (Sitakunda Union)": {
          "সীতাকুণ্ড (Sitakunda)": [
            "ভাটিয়ারি (Bhatiari)",
            "ফৌজদারহাট (Fouzdarhat)"
          ]
        }
      },
      "হাটহাজারী (Hathazari Upazila)": {
        "হাটহাজারী (Hathazari Union)": {
          "হাটহাজারী (Hathazari)": [
            "ফাতেহাবাদ (Fatahabad)",
            "মির্জাপুর (Mirzapur)"
          ]
        }
      },
      "রাউজান (Raozan Upazila)": {
        "রাউজান (Raozan Union)": {
          "রাউজান (Raozan)": [
            "গাহিরা (Gahira)",
            "দেওয়ানপুর (Dewanpur)"
          ]
        }
      },
      "রাঙ্গুনিয়া (Rangunia Upazila)": {
        "রাঙ্গুনিয়া (Rangunia Union)": {
          "রাঙ্গুনিয়া (Rangunia)": [
            "ধামইর (Dhamair)",
            "রাঙ্গুনিয়া বাজার (Rangunia Bazar)"
          ]
        }
      },
      "কর্ণফুলী (Karnaphuli Upazila)": {
        "কর্ণফুলী (Karnaphuli Union)": {
          "কর্ণফুলী (Karnaphuli)": [
            "নিউ ইন্ডাস্ট্রিয়াল এলাকা (New Industrial Area)",
            "উত্পাদন এলাকা (Production Zone)"
          ]
        }
      },
      "বোয়ালখালী (Boalkhali Upazila)": {
        "বোয়ালখালী (Boalkhali Union)": {
          "বোয়ালখালী (Boalkhali)": [
            "চরন্দুইপ (Charandwip)",
            "কাদুরখাল (Kadurkhal)"
          ]
        }
      },
      "আনোয়ারা (Anwara Upazila)": {
        "আনোয়ারা (Anwara Union)": {
          "আনোয়ারা (Anwara)": [
            "বাটালী (Battali)",
            "পারইকর (Paroikora)"
          ]
        }
      },
      "বাঁশখালী (Banshkhali Upazila)": {
        "বাঁশখালী (Banshkhali Union)": {
          "বাঁশখালী (Banshkhali)": [
            "বখশি হামিদ (Bakhshi Hamid Mosque Area)",
            "সাগর সৈকত (Sea Beach Zone)"
          ]
        }
      },
      "লোহাগড়া (Lohagara Upazila)": {
        "লোহাগড়া (Lohagara Union)": {
          "লোহাগড়া (Lohagara)": [
            "চুন্তি (Chunti)",
            "পাদুআ (Padua)"
          ]
        }
      },
      "পাটিয়া (Patiya Upazila)": {
        "পাটিয়া (Patiya Union)": {
          "পাটিয়া (Patiya)": [
            "বুধপাড়া (Budhpara)",
            "পাটিয়া কেন্দ্র (Patiya Center)"
          ]
        }
      },
      "চন্দনাইশ (Chandanaish Upazila)": {
        "চন্দনাইশ (Chandanaish Union)": {
          "চন্দনাইশ (Chandanaish)": [
            "স্থানীয় বাজার (Local Bazaar)",
            "চর অঞ্চল (Char Area)"
          ]
        }
      },
      "সাতকানিয়া (Satkania Upazila)": {
        "সাতকানিয়া (Satkania Union)": {
          "সাতকানিয়া (Satkania)": [
            "বাজালিয়া (Bazalia)",
            "বৈতুল ইজ্জত (Baitul Ijjat)"
          ]
        }
      }
    }, // চট্টগ্রাম জেলা শেষ
        // কক্সবাজার জেলা শুরু
    "কক্সবাজার (Cox's Bazar)": {
      "কক্সবাজার সদর (Cox's Bazar Sadar)": {
        "কক্সবাজার পৌরসভা (Cox's Bazar Municipality)": {
          "কক্সবাজার পৌরসভা (Cox's Bazar Municipality)": [
            "সদর এলাকা (Sadar Area)",
            "নূরগঞ্জ মহল্লা (Nurjanj Mohalla)"
          ]
        },
        "মহেশখালী ইউনিয়ন (Moheshkhali Union)": {
          "মহেশখালী (Moheshkhali)": [
            "বড়বিল (Borobil)",
            "ছোটবিল (Chotobil)"
          ]
        }
      },
      "চকরিয়া (Chakaria)": {
        "চকরিয়া পৌরসভা (Chakaria Municipality)": {
          "চকরিয়া পৌরসভা (Chakaria Municipality)": [
            "মহানগর এলাকা (Metropolitan Area)",
            "নতুন বাজার (New Bazar)"
          ]
        },
        "ফাসিয়াখালী ইউনিয়ন (Fasiakhali Union)": {
          "ফাসিয়াখালী (Fasiakhali)": [
            "বদরখালী (Badarkhali)",
            "কুতুবদিয়া (Kutubdia)"
          ]
        }
      },
      "পেকুয়া (Pekua)": {
        "পেকুয়া (Pekua Union)": {
          "পেকুয়া (Pekua)": [
            "নতুনচর (Natunchar)",
            "দাকুয়া (Dakuya)"
          ]
        }
      },
      "কুতুবদিয়া (Kutubdia)": {
        "কুতুবদিয়া (Kutubdia Union)": {
          "কুতুবদিয়া (Kutubdia)": [
            "বড়ঘোনা (Baraghona)",
            "বড়ঘোনা বাজার (Baraghona Bazar)"
          ]
        }
      },
      "মহেশখালী (Moheshkhali)": {
        "মহেশখালী (Moheshkhali Union)": {
          "মহেশখালী (Moheshkhali)": [
            "চক্লা (Chokla)",
            "তৈলছড়ি (Tailchari)"
          ]
        }
      },
      "রামু (Ramu)": {
        "রামু (Ramu Union)": {
          "রামু (Ramu)": [
            "রামু বাজার (Ramu Bazar)",
            "কুতুবদিয়া বাজার (Kutubdia Bazar)"
          ]
        }
      },
      "ঈদগাঁও (Eidgaon)": {
        "ঈদগাঁও (Eidgaon Union)": {
          "ঈদগাঁও (Eidgaon)": [
            "ঈদগাঁও বাজার (Eidgaon Bazar)",
            "কাঁঠালিয়া (Kathalia)"
          ]
        }
      },
      "উখিয়া (Ukhia)": {
        "উখিয়া (Ukhia Union)": {
          "উখিয়া (Ukhia)": [
            "কুতুপালং (Kutupalong)",
            "আলাইয়া (Alaiya)"
          ]
        }
      },
      "টেকনাফ (Teknaf)": {
        "টেকনাফ (Teknaf Union)": {
          "টেকনাফ (Teknaf)": [
            "সেন্টমার্টিন (Saint Martin)",
            "ঠান্ডাখালী (Thandakhali)"
          ]
        }
      }
    }, // কক্সবাজার জেলা শেষ
        // রাঙামাটি জেলা শুরু
    "রাঙামাটি (Rangamati)": {
      "রাঙামাটি সদর (Rangamati Sadar)": {
        "রাঙামাটি পৌরসভা (Rangamati Municipality)": {
          "রাঙামাটি পৌরসভা (Rangamati Municipality)": [
            "বনৌলা (Bonola)",
            "বনগাঁও (Bongaon)"
          ]
        },
        "মেঘালিয়া (Meghalia Union)": {
          "মেঘালিয়া (Meghalia)": [
            "পান্থপাড়া (Panthpara)",
            "জাফলং (Jaflong)"
          ]
        }
      },
      "বদরগঞ্জ (Baghaichhari)": {
        "বদরগঞ্জ (Baghaichhari Union)": {
          "বদরগঞ্জ (Baghaichhari)": [
            "বদরগঞ্জ বাজার (Baghaichhari Bazar)",
            "কুমারপাড়া (Kumarpara)"
          ]
        }
      },
      "বাঘাইছড়ি (Baghaichhari)": {
        "বাঘাইছড়ি (Baghaichhari Union)": {
          "বাঘাইছড়ি (Baghaichhari)": [
            "সুন্দরবন (Sundarban)",
            "কাপ্তাই (Kaptai)"
          ]
        }
      },
      "জুরাছড়ি (Jurachhari)": {
        "জুরাছড়ি (Jurachhari Union)": {
          "জুরাছড়ি (Jurachhari)": [
            "জুরাছড়ি বাজার (Jurachhari Bazar)",
            "চন্দ্রপুর (Chandrapur)"
          ]
        }
      },
      "লাংগড়া (Langadu)": {
        "লাংগড়া (Langadu Union)": {
          "লাংগড়া (Langadu)": [
            "লাংগড়া বাজার (Langadu Bazar)",
            "চাঁদপুর (Chandpur)"
          ]
        }
      },
      "নানিয়াচর (Naniarchar)": {
        "নানিয়াচর (Naniarchar Union)": {
          "নানিয়াচর (Naniarchar)": [
            "নানিয়াচর বাজার (Naniarchar Bazar)",
            "মহালছড়ি (Mahalchhari)"
          ]
        }
      },
      "কাপ্তাই (Kaptai)": {
        "কাপ্তাই (Kaptai Union)": {
          "কাপ্তাই (Kaptai)": [
            "কাপ্তাই বাঁধ (Kaptai Dam)",
            "হাওর (Haor Area)"
          ]
        }
      }
    }, // রাঙামাটি জেলা শেষ
        // খাগড়াছড়ি জেলা শুরু
    "খাগড়াছড়ি (Khagrachari)": {
      "খাগড়াছড়ি সদর (Khagrachhari Sadar)": {
        "খাগড়াছড়ি পৌরসভা (Khagrachhari Municipality)": {
          "খাগড়াছড়ি পৌরসভা (Khagrachhari Municipality)": [
            "সিটি সেন্টার (City Center)",
            "বগাইল (Bogaill)"
          ]
        },
        "দুলিয়া (Dulia Union)": {
          "দুলিয়া (Dulia)": [
            "দুলিয়া বাজার (Dulia Bazar)",
            "চাঁদপুর (Chandpur)"
          ]
        }
      },
      "মানিকছড়ি (Manikchhari)": {
        "মানিকছড়ি (Manikchhari Union)": {
          "মানিকছড়ি (Manikchhari)": [
            "মানিকছড়ি বাজার (Manikchhari Bazar)",
            "বনগ্রাম (Bangram)"
          ]
        }
      },
      "লামা (Lama)": {
        "লামা (Lama Union)": {
          "লামা (Lama)": [
            "লামা বাজার (Lama Bazar)",
            "তিনবিঘা (Tinbigha)"
          ]
        }
      },
      "গুইমারা (Guimara)": {
        "গুইমারা (Guimara Union)": {
          "গুইমারা (Guimara)": [
            "গুইমারা বাজার (Guimara Bazar)",
            "সোনারগঞ্জ (Sonargaon)"
          ]
        }
      },
      "পানছড়ি (Panchhari)": {
        "পানছড়ি (Panchhari Union)": {
          "পানছড়ি (Panchhari)": [
            "পানছড়ি বাজার (Panchhari Bazar)",
            "মেঘালয় (Meghalay)"
          ]
        }
      },
      "দীঘিনালা (Dighinala)": {
        "দীঘিনালা (Dighinala Union)": {
          "দীঘিনালা (Dighinala)": [
            "দীঘিনালা বাজার (Dighinala Bazar)",
            "নবাবগঞ্জ (Nawabganj)"
          ]
        }
      },
      "মাধবন (Madhabnagar)": {
        "মাধবন (Madhabnagar Union)": {
          "মাধবন (Madhabnagar)": [
            "মাধবন বাজার (Madhabnagar Bazar)",
            "হাওড়া (Haora)"
          ]
        }
      }
    }, // খাগড়াছড়ি জেলা শেষ
        // বান্দরবান জেলা শুরু
    "বান্দরবান (Bandarban)": {
      "বান্দরবান সদর (Bandarban Sadar)": {
        "বান্দরবান পৌরসভা (Bandarban Municipality)": {
          "বান্দরবান পৌরসভা (Bandarban Municipality)": [
            "সিটি সেন্টার (City Center)",
            "বিল্ডার্স মার্কেট (Builders Market)"
          ]
        },
        "রুমা (Ruma Union)": {
          "রুমা (Ruma)": [
            "রুমা বাজার (Ruma Bazar)",
            "বাজালিয়া (Bazalia)"
          ]
        }
      },
      "থানচি (Thanchi)": {
        "থানচি (Thanchi Union)": {
          "থানচি (Thanchi)": [
            "মতিঝিল (Motijhil)",
            "কাঠালিয়াখাল (Kathaliyakhal)"
          ]
        }
      },
      "নাইক্ষ্যংছড়ি (Naikhongchhari)": {
        "নাইক্ষ্যংছড়ি (Naikhongchhari Union)": {
          "নাইক্ষ্যংছড়ি (Naikhongchhari)": [
            "নাইক্ষ্যংছড়ি বাজার (Naikhongchhari Bazar)",
            "গাজিপুর (Gazipur)"
          ]
        }
      },
      "আলীকদম (Alikadam)": {
        "আলীকদম (Alikadam Union)": {
          "আলীকদম (Alikadam)": [
            "আলীকদম বাজার (Alikadam Bazar)",
            "চৌধুরীপাড়া (Choudhuripara)"
          ]
        }
      },
      "নাইয়াংছড়ি (Naniarchar)": {
        "নাইয়াংছড়ি (Naniarchar Union)": {
          "নাইয়াংছড়ি (Naniarchar)": [
            "নাইয়াংছড়ি বাজার (Naniarchar Bazar)",
            "মহালছড়ি (Mahalchhari)"
          ]
        }
      },
      "লামা (Lama)": {
        "লামা (Lama Union)": {
          "লামা (Lama)": [
            "লামা বাজার (Lama Bazar)",
            "চাঁদপুর (Chandpur)"
          ]
        }
      }
    } // বান্দরবান জেলা শেষ
    
    
    
    
    
    
    
  },// চট্টগ্রাম বিভাগ শেষ
  
  
  
};