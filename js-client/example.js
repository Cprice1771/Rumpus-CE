const rapi = new PublicRumpusAPI('insert-delgation-key');
await rapi.getUserById('vxh8g2');
await rapi.bulkGetUsersById(['vxh8g2']);
await rapi.SearchUsers({ userIds: ['vxh8g2']});

await rapi.searchBookmarks({ sort: 'createdAt' }, 'optional-users-key-to-bookmark');
await rapi.addBookmark('ccx0l3t', 'optional-users-key-to-bookmark');
await rapi.removeBookmark('ccx0l3t', 'optional-users-key-to-bookmark');

await rapi.getLevelById('ccx0l3t');
await rapi.bulkGetLevelsById(['ccx0l3t']);
await rapi.SearchLevels({ levelIds: ['ccx0l3t']});


await rapi.getTags();

await rapi.DelegationKeyOptions();
await rapi.DelegationKeyPermissions();