export function resolveClusterServices(servicePage, allServices) {
    return allServices.filter(
        (s) =>
            s.cluster === servicePage.cluster &&
            s.id !== servicePage.id
    ).slice(0, 3);
}

