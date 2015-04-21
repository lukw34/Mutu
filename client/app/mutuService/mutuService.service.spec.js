'use strict';

describe('Service connect two controllers', function () {

  // load the service's module
  beforeEach(module('myMutuApp'));

  // instantiate service
  var mutuService;
  beforeEach(inject(function (_mutuService_) {
    mutuService = _mutuService_;
  }));

  it('Should update opinions', function () {
    mutuService.pushTypeAndGroup('WariantNT', '125');
    mutuService.pushOpinion('matematyka', 'słaba', 'dobra');
    var opinion = mutuService.getOpinion();

    expect(opinion.type).toEqual('WaraintNT');
    expect(opinion.lecture).toEqual('matematyka');
    expect(opinion.firstOpinion).toEqual('słaba');
    expect(opinion.secondOpinion).toEqual('dobra');

    var groupId = mutuService.getGroupId();

    expect(groupId).toEqual('125')

  });

});
