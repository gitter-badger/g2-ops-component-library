const entitySelectorConfig = (type) =>
  ({
    seller: {
      entityDataSourceKeys: 'sellers',
      entityDisplayFunction: (e) => e && `${e.sellerName} - ${e.insuranceCompanyFlag ? 'Insurance' : 'Non Insurance'}`,
      primaryTextKeys: [
        'sellerId',
        'sellerName',
        'sellerType',
        'copartSellerFlag',
        'sellerCompany',
        'insuranceCompanyFlag'
      ]
    },
    contact: {
      entityDataSourceKeys: 'adjusters',
      entityDisplayFunction: (e) => e && `${e.firstName} ${e.lastName}`,
      primaryTextKeys: ['firstName', 'lastName', 'contact', 'contactId']
    },
    owner: {
      entityDataSourceKeys: 'owners',
      entityDisplayFunction: (e) => e && e.cmp_nm,
      primaryTextKeys: [
        'owner_insrd_id',
        'first_nm',
        'last_nm',
        'email',
        'cntry_cd',
        'vat_id',
        'status',
        'cmp_nm',
        'mailing_communication'
      ],
      rowHeight: 100
    },
    pickupLocation: {
      entityDataSourceKeys: 'pickupLocations',
      entityDisplayFunction: (e) => e && `${e.lot_site_nm}`,
      primaryTextKeys: [
        'lot_site_nm',
        'lot_site_type_cd',
        'email',
        'status',
        'addr_line1',
        'addr_line2',
        'oper_cntry_cd',
        'city',
        'state_cd',
        'postal_cd',
        'phone_num',
        'alt_phone_num',
        'vat_id'
      ],
      rowHeight: 140
    },
    vendor: {
      entityDataSourceKeys: 'vendors',
      entityDisplayFunction: (e) => e && `${e.vendor_nm}`,
      primaryTextKeys: [
        'vendor_nm', 'email', 'status'
      ]
    }
  }[type])

export default entitySelectorConfig
