interface ProviderData {
    provider: {
        logo: string;
        logo_include_text: boolean;
        name: string;
        asn: number;
    };
    locations: string[];
    services: string[];
    routes: string;
    bgpFee: string;
    bgpFilters: string[];
    bgpFeatures: string[];
    notes: string;
    pricing: string;
    link: string;
}

const data: ProviderData[] = [
    {
      "provider": {
        "logo": "/img/accuris-hosting.svg",
        "logo_include_text": true,
        "name": "Accuris Hosting",
        "asn": 52210
      },
      "locations": ["Ottawa, CA"],
      "services": ["VPS", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "$5 USD",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $2.50 USD",
      "link": "https://clients.accuristechnologies.ca/aff.php?aff=1"
    },
    {
      "provider": {
        "logo": "/img/cloudie-networks.png",
        "logo_include_text": false,
        "name": "Cloudie Networks",
        "asn": 924
      },
      "locations": ["Toronto, CA", "Fremont, US"],
      "services": ["LIR Services", "VPS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],

      "notes": "VMs can have access to FREMIX/ONIX",
      "pricing": "$5USD/month for VPS, $35 USD for AS",
      "link": "https://my.cloudie.sh/aff.php?aff=8"
    },
    {
      "provider": {
        "logo": "/img/ifog.png",
        "logo_include_text": true,
        "name": "iFog GmbH",
        "asn": 34927
      },
      "locations": [ "Singapore, SG", "Barcelona, ES", "Frankfurt, DE", "London, GB", "Zurich, CH", "Sydney, AU", "Oslo, NO", "Amsterdam, NL", "Fremont, US", "Kansas City, US"],
      "services": ["LIR Services", "IXP Access", "VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to numerous IXs such as LocIX, DE-CIX, NL-ix, FogIXP and LoNAP",
      "pricing": "Starting at 4 CHF/month\n40 CHF/year for AS registrations",
      "link": "https://my.ifog.ch/order/forms/a/OTM5"
    },
    {
      "provider": {
        "logo": "/img/karabro_loga.png",
        "logo_include_text": true,
        "name": "Karabro AB",
        "asn": 51519
      },
      "locations": ["Malmö, SE"],
      "services": ["LIR Services", "VPS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],

      "notes": "",
      "pricing": "Starting at 50 SEK",
      "link": "https://my.karabro.se/aff.php?aff=1"
    },
    // {
    //   "provider": {
    //     "logo": "/img/misaka.png",
    //     "name": "Misaka"
    //   },
    //   "locations": "10+ locations",
    //   "services": "BGP VPS",
    //   "routes": "Full + default",
    //   "bgpCommunities": "Yes + passthough",
    //   "bgpFee": "$75 USD",
    //   "bgpFilters": "Automatic updates. RPKI + IRR filtering",
    //   "bgpAsSetSupport": "No",
    //   "notes": "Open a ticket to setup an account with BGP. Some locations can take one week+ to update filters",
    //   "pricing": "Starting at $6 USD",
    //   "link": "https://www.misaka.io/services/mc2"
    // },
    {
      "provider": {
        "logo": "/img/suble.png",
        "logo_include_text": false,
        "name": "Suble",
        "asn": 199545
      },
      "locations": ["Copenhagen, DK"],
      "services": ["VPS", "IXP Access", "Baremetal", "Transit", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],

      "notes": "Fully automatic BGP setup from dashboard. Filters submitted to upstreams every monday.\nCan provide access to IX exchange NorthIX",
      "pricing": "Starting at $1.50 USD with discount \"bgp.cheap\"",
      "link": "https://www.suble.io/"
    },
    {
      "provider": {
        "logo": "/img/vultr.svg",
        "logo_include_text": true,
        "name": "Vultr",
        "asn": 20473 
      },
      "locations": ["Chicago, US", "Seattle, US", "Melbourne, AU", "Frankfurt, DE", "Atlanta, US", "Warsaw, PL", "Seoul, KR", "Miami, US", "Stockholm, SE", "Bangalore, IN", "Manchester, GB", "Santiago, CL", "Delhi NCR, IN", "Johannesburg, ZA", "Honolulu, US", "Mumbai, IN", "Sao Paulo, BR", "Mexico City, MX", "Madrid, ES", "Toronto, CA", "Silicon Valley, US", "London, GB", "Dallas, US", "Sydney, AU", "Paris, FR", "Amsterdam, NL", "Los Angeles, US", "New Jersey, US", "Singapore, SG", "Tokyo, JP", "Osaka, JP", "Tel Aviv, IL"],
      "services": ["VPS", "Baremetal", "DNS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "None",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting at $5 USD",
      "link": "https://www.vultr.com/?ref=6883827"
    },
    {
      "provider": {
        "logo": "/img/xenyth.svg",
        "logo_include_text": true,
        "name": "Xenyth",
        "asn": 835
      },
      "locations": ["Toronto, CA"],
      "services": ["VPS", "Baremetal", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Minimum s1.small for VPS. Can also provide access to ONIX",
      "pricing": "Starting at $3.50 USD",
      "link": "https://xenyth.net/?affid=455"
    },
    {
      "provider": {
        "logo": "https://v.ps/assets/img/logo_dark.7d4c766e.svg",
        "logo_include_text": true,
        "name": "V.ps",
        "asn": 3204
      },
      "locations": ["London, GB", "Frankfurt, DE", "Amsterdam, NL", "Düsseldorf, DE", "Tallinn, EE", "San Jose, US", "New York, US", "Seattle, US", "Hong Kong, HK", "Osaka, JP", "Tokyo, JP", "Sydney, AU"],
      "services": ["VPS", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "50 EUR",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges DE-CIX, LocIX and AMS-IX",
      "pricing": "Starts at 5.95 EUR",
      "link": "https://vps.hosting/?affid=1286&affplan=1"
    },
    {
      "provider": {
        "logo": "/img/zappie.png",
        "logo_include_text": false,
        "name": "Zappie Host",
        "asn": 61138
      },
      "locations": ["Auckland, NZ"],
      "services": ["VPS", "LIR Services"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $4.50 USD",
      "link": "https://zappiehost.com/bgp-peering-with-cloud-vps"
    },
    {
      "provider": {
        "logo": "/img/pebblehost.webp",
        "logo_include_text": true,
        "name": "PebbleHost",
        "asn": 212027
      },
      "locations": ["Coventry, GB"],
      "services": ["VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["RPKI"],
      "notes": "",
      "pricing": "Starting at $10 USD",
      "link": "https://pebblehost.com/"
    },
    {
      "provider": {
        "logo": "/img/f4networks.png",
        "logo_include_text": false,
        "name": "F4 Networks",
        "asn": 21738
      },
      "locations": ["Kansas City, US", "San Francisco, US"],
      "services": ["VPS", "Baremetal", "Tunnels"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $6 USD",
      "link": "https://store.f4.network/"
    },
    {
      "provider": {
        "logo": "/img/divergent.png",
        "logo_include_text": true,
        "name": "Divergent Networks",
        "asn": 50391
      },
      "locations": ["London, GB"],
      "services": ["LIR Services", "VPS", "Tunnels"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at £5 GBP",
      "link": "https://divergentnetworks.co.uk/"
    },
    {
      "provider": {
        "logo": "/img/virtua.png",
        "logo_include_text": true,
        "name": "Virtua Cloud",
        "asn": 35661
      },
      "locations": ["Paris, FR", "Fremont, US", "Lille, FR"],
      "services": ["VPS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at 3 EUR",
      "link": "https://www.virtua.cloud/?ref=6uqf3mtl"
    },
    {
      "provider": {
        "logo": "/img/getservers.png",
        "logo_include_text": true,
        "name": "GetServers",
        "asn": 48605
      },
      "locations": ["Manchester, GB"],
      "services": ["VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at £2.50 GBP",
      "link": "https://getservers.co.uk/"
    },
    {
      "provider": {
        "logo": "/img/lagrange.png",
        "logo_include_text": false,
        "name": "Lagrange",
        "asn": 209735
      },
      "locations": ["London, GB"],
      "services": ["VPS", "Baremetal", "IXP Access", "LIR Services"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "£25 for ASN + /48\nLINX ports available for VPS and baremetal",
      "pricing": "Starting at £8 GBP",
      "link": "https://lagrange.cloud/"
    }
  ];

export default data;
